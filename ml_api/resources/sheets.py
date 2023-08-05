import os
from apiclient import discovery
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from dotenv import load_dotenv

load_dotenv()

# If modifying these scopes, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

# The ID and range of a sample spreadsheet.
# get data from .env file
SAMPLE_SPREADSHEET_ID = os.environ.get('SAMPLE_SPREADSHEET_ID')
SAMPLE_RANGE_NAME = os.environ.get('SAMPLE_RANGE_NAME')


def get_data_from_sheet():
    """
    This function returns the data from the Google Sheet.

    Parameters
    ----------
    None

    """

    try:
        cred_file = "/etc/secrets/credentials.json"
        credentials = service_account.Credentials.from_service_account_file(cred_file, scopes=SCOPES)
    except:
        cred_file = "credentials.json"
        credentials = service_account.Credentials.from_service_account_file(cred_file, scopes=SCOPES)

    try:
        
        service = discovery.build('sheets', 'v4', credentials=credentials)

        sheet = service.spreadsheets()
        result = sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID,
                                        range=SAMPLE_RANGE_NAME).execute()
        values = result.get('values', [])

        if not values:
            print('No data found.')
            return None
        return values
    except HttpError as err:
        print(err)
