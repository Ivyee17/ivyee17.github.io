import os
from urllib import parse
for root,dirs,files in os.walk('./') :
     for f in files :
             print(os.rename(f,parse.quote(f)));