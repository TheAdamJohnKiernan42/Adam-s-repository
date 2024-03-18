import firebase_admin
from firebase_admin import credentials, firestore
import matplotlib.pyplot as plt

# Initialize Firebase Admin SDK
cred = credentials.Certificate("C:\Users\petri\OneDrive - Longford and Westmeath Education and Training Board\Computer Science\Leaving Cert Project\a-name-35a70-firebase-adminsdk-vymse-f9570e654f.json")
firebase_admin.initialize_app(cred)

# Initialize Firestore database
db = firestore.client()

# Function to fetch data from Firebase
def fetch_data_from_firebase(collection_name):
    data = []
    collection_ref = db.collection(collection_name)
    docs = collection_ref.stream()

    for doc in docs:
        data.append(doc.to_dict())
    
    return data

# Function to create a graph
def create_graph(data):
    x = []
    y = []

    for item in data:
        x.append(item['x_value'])  # Assuming x_value is the key for x-axis data
        y.append(item['y_value'])  # Assuming y_value is the key for y-axis data

    plt.plot(x, y)
    plt.xlabel('X-axis Label')
    plt.ylabel('Y-axis Label')
    plt.title('Firebase Data Visualization')
    plt.grid(True)
    plt.show()

# Main function
def main():
    collection_name = 'your_collection_name'  # Change this to your actual collection name
    data = fetch_data_from_firebase(collection_name)
    create_graph(data)

if __name__ == "__main__":
    main()