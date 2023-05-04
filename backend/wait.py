from asyncio.log import logger
from wsgi import  app
from waitress import serve
import logging
#from paste.translogger import Translogger
import paste.translogger as Translogger
logger=logging.getLogger('waitress')
logger.setLevel(logging.INFO)
print('serving')
serve(app, port=9001)