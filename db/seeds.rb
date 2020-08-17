# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# --------------------------Regions--------------------------
northeast = 1
Region.create(name:"Northeast", image_url:"https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1891829-060poliwag.png", description:"This place has many tastydelicious fermented grape juiceries.")
east = 2
Region.create(name:"East", image_url:"https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1892299-039jigglypuff.png", description:"This place has many tastydelicious fermented grape juiceries.")
southeast = 3
Region.create(name:"Southeast", image_url:"https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png", description:"This place has many tastydelicious fermented grape juiceries.")
northwest = 4
Region.create(name:"Northwest", image_url:"https://giantbomb1.cbsistatic.com/uploads/scale_small/0/6087/2437349-pikachu.png", description:"This place has many tastydelicious fermented grape juiceries.")
west = 5
Region.create(name:"West", image_url:"https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1891631-016pidgey.png", description:"This place has many tastydelicious fermented grape juiceries.")
southwest = 6
Region.create(name:"Southwest", image_url:"https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1891761-004charmander.png", description:"This place has many tastydelicious fermented grape juiceries.")
midwest = 7
Region.create(name:"Midwest", image_url:"https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1891764-007squirtle.png", description:"This place has many tastydelicious fermented grape juiceries.")

# --------------------------Varietals--------------------------

chardonnay = 1
Varietal.create(name:"Chardonnay", description:"Yummy yummy wine in mah tummy", image_url:"https://media.winefolly.com/chardonnay-wine-in-a-glass-and-chardonnay-grapes.jpg")
cabernet_sauvignon = 2
Varietal.create(name:"Cabernet Sauvignon", description:"Yummy yummy wine in mah tummy", image_url:"https://media.winefolly.com/the-color-of-wine-cabernet-sauvignon-in-a-glass.jpg")
merlot = 3
Varietal.create(name:"Merlot", description:"Yummy yummy wine in mah tummy", image_url:"https://media.winefolly.com/merlot-wine-glass-grapes-winefolly.jpg")
pinot_noir = 4
Varietal.create(name:"Pinot Noir", description:"Yummy yummy wine in mah tummy", image_url:"https://media.winefolly.com/color-of-pinot-noir-wine-and-grapes.jpg")
zinfandel = 5
Varietal.create(name:"Zinfandel", description:"Yummy yummy wine in mah tummy", image_url:"https://media.winefolly.com/zinfandel-wine-grapes-glass-winefolly-infographic.jpg")
bordeaux_blend = 6
Varietal.create(name:"Bordeaux Blend", description:"Yummy yummy wine in mah tummy")
riesling = 7
Varietal.create(name:"Riesling", description:"Yummy yummy wine in mah tummy", image_url:"https://media.winefolly.com/riesling-wine-in-a-glass-with-grapes.jpg")
pinot_gris = 8
Varietal.create(name:"Pinot Gris", description:"Yummy yummy wine in mah tummy", image_url:"https://media.winefolly.com/pinot-grigio-gris-wine-guide.jpg")
pinot_grigio = 9
Varietal.create(name:"Pinot Grigio", description:"Yummy yummy wine in mah tummy")
concord = 10
Varietal.create(name:"Concord", description:"Yummy yummy wine in mah tummy")
niagara = 11
Varietal.create(name:"Niagara", description:"Yummy yummy wine in mah tummy")
rosé = 12
Varietal.create(name:"Rosé", description:"Yummy yummy wine in mah tummy")

# --------------------------Vineyards--------------------------

Vineyard.create(name:"Gouveia Vineyards", address:"1339 Whirlwind Hill Rd, Wallingford, CT 06492", wines_available: ["Chardonnay, Pinot Grigio, Cabernet Sauvignon, Merlot, Pinot Noir, Zinfandel"], region_id: northeast)

Vineyard.create(name:"Willies Crazy Wine Shack", address:"10189 N Delaware Dr, Bangor, PA 18013", wines_available: ["Riesling", "Pinot Noir", "Rosé", "Concord", "Chardonnay", "Niagara"], region_id: northeast)

Vineyard.create(name:"My Bathtub Vineyards", address:"5043 US-11, Homer, NY 13077", wines_available: ["Zinfandel", "Bordeaux Blend", "Riesling", "Concord"], region_id: northeast)

Vineyard.create(name:"Humphrey's Liquor Vineyards", address:"1339 Whirlwind Hill Rd, Wallingford, CT 06492", wines_available: ["Chardonnay, Pinot Grigio, Cabernet Sauvignon, Merlot, Pinot Noir, Zinfandel"], region_id: southeast)

Vineyard.create(name:"Agnes' Alcy's Wine Hole", address:"10189 N Delaware Dr, Bangor, PA 18013", wines_available: ["Riesling", "Pinot Noir", "Rosé", "Concord", "Chardonnay", "Niagara"], region_id: southeast)

Vineyard.create(name:"Some Nice Vineyard", address:"5043 US-11, Homer, NY 13077", wines_available: ["Zinfandel", "Bordeaux Blend", "Riesling", "Concord"], region_id: southeast)

# --------------------------Cellars--------------------------

Cellar.create(vineyard_id: 1, varietal_id: chardonnay)
Cellar.create(vineyard_id: 1, varietal_id: pinot_grigio)
Cellar.create(vineyard_id: 1, varietal_id: cabernet_sauvignon)
Cellar.create(vineyard_id: 1, varietal_id: merlot)
Cellar.create(vineyard_id: 1, varietal_id: pinot_noir)
Cellar.create(vineyard_id: 1, varietal_id: zinfandel)

Cellar.create(vineyard_id: 2, varietal_id: riesling)
Cellar.create(vineyard_id: 2, varietal_id: pinot_noir)
Cellar.create(vineyard_id: 2, varietal_id: rosé)
Cellar.create(vineyard_id: 2, varietal_id: concord)
Cellar.create(vineyard_id: 2, varietal_id: chardonnay)
Cellar.create(vineyard_id: 2, varietal_id: niagara)

Cellar.create(vineyard_id: 3, varietal_id: zinfandel)
Cellar.create(vineyard_id: 3, varietal_id: bordeaux_blend)
Cellar.create(vineyard_id: 3, varietal_id: riesling)
Cellar.create(vineyard_id: 3, varietal_id: concord)

Cellar.create(vineyard_id: 4, varietal_id: chardonnay)
Cellar.create(vineyard_id: 4, varietal_id: pinot_grigio)
Cellar.create(vineyard_id: 4, varietal_id: cabernet_sauvignon)
Cellar.create(vineyard_id: 4, varietal_id: merlot)
Cellar.create(vineyard_id: 4, varietal_id: pinot_noir)
Cellar.create(vineyard_id: 4, varietal_id: zinfandel)

Cellar.create(vineyard_id: 5, varietal_id: riesling)
Cellar.create(vineyard_id: 5, varietal_id: pinot_noir)
Cellar.create(vineyard_id: 5, varietal_id: rosé)
Cellar.create(vineyard_id: 5, varietal_id: concord)
Cellar.create(vineyard_id: 5, varietal_id: chardonnay)
Cellar.create(vineyard_id: 5, varietal_id: niagara)

Cellar.create(vineyard_id: 6, varietal_id: zinfandel)
Cellar.create(vineyard_id: 6, varietal_id: bordeaux_blend)
Cellar.create(vineyard_id: 6, varietal_id: riesling)
Cellar.create(vineyard_id: 6, varietal_id: concord)