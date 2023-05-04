from crypt import *
import logging
from colorama import Cursor
from flask import Flask,request,g
from flask_cors import CORS
import pymysql
from requests import request
from Crypto.Cipher import AES

from Crypto.Random import get_random_bytes


app=Flask(__name__)
CORS(app)

@app.before_request
def beforerequest():
    g.db=pymysql.connect(host="localhost",user="root",password="password",db="portfolio",autocommit=True)
    g.cursor=g.db.cursor()

@app.teardown_request
def teardown(exception):
    g.cursor.close()
    g.db.close()


@app.route("/api/Recommendation",methods=["GET"])
def data1():
    try: 
        #DATABASE CONNECTION
        db=pymysql.connect(host="localhost",user="root",password="password",db="portfolio",autocommit=True) # This links python to mysql which allows us too run  myql commands and import data from database
        Cursor=db.cursor()

        #SQL QUERY
        query1="Select * from recommendation Where onshowcase=True"

        #FETCH THE DATA
        Cursor.execute(query1)
        recommnedation_data=Cursor.fetchall()
        
        #PROCESS THE DATA
        results_data=[]
        for recommendations in recommnedation_data:
            recommendation_obj={
                "id":recommendations[0],
                "cardtitle":recommendations[1],
                "cardbody":recommendations[2],
                "cardfooter":recommendations[3]
            }
            results_data.append(recommendation_obj)
        
        #CLOSE THE PROCESS
        Cursor.close()
        db.close()

        #RETURNING THE RESULT
        return {"issuccessful":True,"results":results_data}

        #ERROR HANDLING
    except Exception as e:
        logging.error(e)
        return{"issuccessful":False, "results":[]}

# Creating Connection to post the data in Database
#ADD PROJECT
@app.route("/api/addproject", methods=["POST"])
def add_project():
    try:
        project=request.json
        print(project)
        query="INSERT INTO projects VALUES(%s,%s,%s,%s,%s);"
        Cursor.execute(query, [project["id"],project["title"],project["imageurl"],project["tool"]])
        return{"issuccessful":True}
    except Exception as e:
        logging.error(e)
        return{"issuccessful":False}

#ADD RECOMMENDATION
@app.route("/api/addrecommendation", methods=["POST"])
def add_recommendation():
    try:
        recommendation=request.json
        print(recommendation)
        query="INSERT INTO projects VALUES(%s,%s,%s,%s,%s);"
        Cursor.execute(query, [recommendation["id"],recommendation["title"],recommendation["imageurl"],recommendation["tool"]])
        return{"issuccessful":True}
    except Exception as e:
        logging.error(e)
        return{"issuccessful":False}










