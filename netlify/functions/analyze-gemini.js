// netlify/functions/analyze-gemini.js
// Google Gemini API Function for EmoBot

export async function handler(event, context) {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Parse request body
        const { text } = JSON.parse(event.body);
        
        if (!text || text.length === 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Text is required' })
            };
        }

        // Get API key from environment variable
        const apiKey = process.env.GEMINI_API_KEY;
        
        if (!apiKey) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'API key not configured' })
            };
        }

        // Call Google Gemini API
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `You are a professional psychologist. Analyze the emotional state in the following text:

"${text}"

Respond ONLY with a valid JSON object (no markdown, no code blocks, just pure JSON):
{
    "emotion_type": "main emotion type (e.g., Joy, Anxiety, Calm, Anger, Sadness, Excitement, Melancholy)",
    "intensity": emotional intensity as a number between 0-100,
    "color": "hex color code representing this emotion",
    "keywords": ["keyword1", "keyword2", "keyword3"],
    "analysis": "brief analysis in one sentence (max 50 words)"
}`
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 500
                    }
                })
            }
        );

        // Check API response
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Gemini API error:', errorText);
            throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();

        // Extract the text from Gemini's response
        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
            throw new Error('Invalid response format from Gemini');
        }

        const aiText = data.candidates[0].content.parts[0].text;

        // Parse the JSON from the AI response
        let analysis;
        try {
            // Clean up the text (remove any markdown code blocks if present)
            const cleanText = aiText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            analysis = JSON.parse(cleanText);
        } catch (e) {
            console.error('Failed to parse AI response:', aiText);
            throw new Error('AI returned invalid JSON format');
        }

        // Return in the same format as before for compatibility
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                content: [{
                    type: 'text',
                    text: JSON.stringify(analysis)
                }]
            })
        };

    } catch (error) {
        console.error('Function error:', error);
        
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ 
                error: 'Failed to analyze emotion',
                message: error.message 
            })
        };
    }
}
