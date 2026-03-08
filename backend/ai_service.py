import os
import json
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

ANALYZE_SCHEMA = {
    "type": "object",
    "properties": {
        "categories": {
            "type": "array",
            "items": {
                "type": "string",
                "enum": [
                    "mental_health",
                    "primary_care",
                    "food_assistance",
                    "emergency_care"
                ]
            }
        },
        "urgency": {
            "type": "string",
            "enum": ["low", "medium", "high"]
        },
        "emergency": {
            "type": "boolean"
        },
        "low_cost_preferred": {
            "type": "boolean"
        },
        "keywords": {
            "type": "array",
            "items": {"type": "string"}
        },
        "summary": {
            "type": "string"
        }
    },
    "required": [
        "categories",
        "urgency",
        "emergency",
        "low_cost_preferred",
        "keywords",
        "summary"
    ],
    "additionalProperties": False
}

def analyze_need_text(need_text: str, location: str = "Merced, CA"):
    response = client.responses.create(
        model="gpt-5-mini",
        input=[
            {
                "role": "system",
                "content": [
                    {
                        "type": "input_text",
                        "text": (
                            "You are classifying user requests for a health and support "
                            "resource finder for Merced, California. "
                            "Do not diagnose medical conditions. "
                            "Only classify needs into supported categories and urgency. "
                            "Return only structured JSON."
                        )
                    }
                ]
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "input_text",
                        "text": f"User request: {need_text}\nLocation: {location}"
                    }
                ]
            }
        ],
        text={
            "format": {
                "type": "json_schema",
                "name": "need_analysis",
                "schema": ANALYZE_SCHEMA,
                "strict": True
            }
        }
    )

    return json.loads(response.output_text)