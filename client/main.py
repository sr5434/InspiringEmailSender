import requests

url = "https://llzeiixnfakzqivanwsb.functions.supabase.co/EmailBot"

def call_api():
    json = requests.get(url).json()
    return '"' + json["message"]

if __name__ == "__main__":
    print(call_api())