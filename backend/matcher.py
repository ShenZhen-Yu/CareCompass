from merced_resources import MERCED_RESOURCES

def match_resources(ai_result: dict, low_cost_only: bool = False, open_now_only: bool = False):
    categories = set(ai_result.get("categories", []))
    ai_low_cost = ai_result.get("low_cost_preferred", False)

    require_low_cost = low_cost_only or ai_low_cost

    results = []

    for resource in MERCED_RESOURCES:
        if resource["category"] not in categories:
            continue

        if require_low_cost and not resource["lowCost"]:
            continue

        if open_now_only and not resource["openNow"]:
            continue

        results.append(resource)

    return results