from PIL import Image

d=input('img:')
with Image.open(d) as image:
    image=image.rotate(90)
    image.save(d, image.format)
