from PIL import Image

from resizeimage import resizeimage

import os

sizes = [[200,200],[320,200],[200,200],[320,200],[200,200],[320,200],[320,200],[320,200],[320,200]]
for d in os.listdir('./in'):
#    print(d)
    if not os.path.isdir('in/'+d):
        if d != '.DS_Store' and not d[:2]=='._' and not os.path.exists(d):#mac bad
            print(d)
#            with open('in/'+d, 'r+b') as f:
            with Image.open('in/'+d) as image:
#                        print(image.width,image.height,i)
#                        if image.height>image.width:
#                            image = resizeimage.resize_crop(image, image.width,(image.width*200)//sizes[c][0])
#                            image.show()
                m = min(image.height,image.width,512)
                cover = resizeimage.resize_cover(image, [m,m])
                cover.save(d, image.format)
