import pandas as pd
import numpy as np
from nltk.corpus import stopwords
import nltk
import re
from sklearn.feature_extraction.text import TfidfVectorizer 
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.metrics.pairwise import euclidean_distances
from nltk.tokenize import word_tokenize

def abstract_similarity(text):
    """
    This function returns the top 5 most similar abstracts based on cosine similarity.

    Parameters
    ----------
    text : str
        The text extracted from the uploaded PDF file.
        
    """

    documents_df = pd.read_csv('resources/abstracts.csv')
    stop_words_l=stopwords.words('english')
    documents_df['documents_cleaned']=documents_df.Abstract.apply(lambda x: " ".join(re.sub(r'[^a-zA-Z]',' ',w).lower() for w in x.split() if re.sub(r'[^a-zA-Z]',' ',w).lower() not in stop_words_l) )


    tfidfvectoriser=TfidfVectorizer()
    tfidfvectoriser.fit(documents_df.documents_cleaned)
    tfidf_vectors=tfidfvectoriser.transform(documents_df.documents_cleaned)
    query_document = [text]
    query_p = pd.DataFrame(query_document,columns=['querys'])
    query_p['processed'] = query_p.querys.apply(lambda x: " ".join(re.sub(r'[^a-zA-Z]',' ',w).lower() for w in x.split() if re.sub(r'[^a-zA-Z]',' ',w).lower() not in stop_words_l) )

    input_tfidf = tfidfvectoriser.transform(query_p['processed'])
    similarities = cosine_similarity(input_tfidf, tfidf_vectors)
    
    df_dict = {}

    # Get the most similar document(s) based on cosine similarity
    most_similar_docs = similarities.argsort()[0][-5:][::-1]  # Get top 5 similar documents
    for doc_index in most_similar_docs:
        record_dict = documents_df.iloc[doc_index].to_dict()
        df_dict[int(doc_index)] = record_dict
    return df_dict


