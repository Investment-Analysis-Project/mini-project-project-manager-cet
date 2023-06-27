import pandas as pd
import numpy as np
import nltk
import re
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from nltk.tokenize import word_tokenize
from resources.sheets import get_data_from_sheet

def abstract_similarity(text):
    """
    This function returns the top 5 most similar abstracts based on cosine similarity.

    Parameters
    ----------
    text : str
        The text extracted from the uploaded PDF file.

    """
    try:
        documents_df = pd.DataFrame(get_data_from_sheet()[1:], columns=get_data()[0])
    except:
        try:
            documents_df = pd.read_csv('/etc/secrets/abstracts.csv')
        except:
            documents_df = pd.read_csv('resources/abstracts.csv')

    nltk.download('stopwords')  # Download the stopwords resource

    stop_words_l = nltk.corpus.stopwords.words('english')

    documents_df = documents_df.drop(['Timestamp'], axis=1)
    documents_df = documents_df.rename(columns={'Group Members \n(Name of all members)': 'Group Members', 'Course (If Mtech)': 'Course'})
    if 'Unnamed: 9' in documents_df.columns:
        documents_df = documents_df.drop(['Unnamed: 9'], axis=1)
    documents_cleaned = documents_df.Abstract.apply(lambda x: " ".join(re.sub(r'[^a-zA-Z]', ' ', w).lower() for w in x.split() if re.sub(r'[^a-zA-Z]', ' ', w).lower() not in stop_words_l))
    tfidfvectoriser = TfidfVectorizer()
    tfidfvectoriser.fit(documents_cleaned)
    tfidf_vectors = tfidfvectoriser.transform(documents_cleaned)
    query_document = [text]
    query_p = pd.DataFrame(query_document, columns=['querys'])
    query_p['processed'] = query_p.querys.apply(lambda x: " ".join(re.sub(r'[^a-zA-Z]', ' ', w).lower() for w in x.split() if re.sub(r'[^a-zA-Z]', ' ', w).lower() not in stop_words_l))

    input_tfidf = tfidfvectoriser.transform(query_p['processed'])
    similarities = cosine_similarity(input_tfidf, tfidf_vectors)

    df_dict = {}
    index = 0

    # Get the most similar document(s) based on cosine similarity
    most_similar_docs = similarities.argsort()[0][-5:][::-1]  # Get top 5 similar documents
    for doc_index in most_similar_docs:
        record_dict = documents_df.iloc[doc_index].to_dict()
        df_dict[int(index)] = record_dict
        index = index + 1
    return df_dict
