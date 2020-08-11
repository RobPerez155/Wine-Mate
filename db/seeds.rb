# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

northeast = Region.create(name:"Northeast", image_url:"https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1891829-060poliwag.png", description:"This place has many tastydelicious fermented grape juiceries.")
east = Region.create(name:"East", image_url:"https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1892299-039jigglypuff.png", description:"This place has many tastydelicious fermented grape juiceries.")
southeast = Region.create(name:"Southeast", image_url:"https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png", description:"This place has many tastydelicious fermented grape juiceries.")
northwest = Region.create(name:"Northwest", image_url:"https://giantbomb1.cbsistatic.com/uploads/scale_small/0/6087/2437349-pikachu.png", description:"This place has many tastydelicious fermented grape juiceries.")
west = Region.create(name:"West", image_url:"https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1891631-016pidgey.png", description:"This place has many tastydelicious fermented grape juiceries.")
southwest = Region.create(name:"Southwest", image_url:"https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1891761-004charmander.png", description:"This place has many tastydelicious fermented grape juiceries.")
midwest = Region.create(name:"Midwest", image_url:"https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1891764-007squirtle.png", description:"This place has many tastydelicious fermented grape juiceries.")

chardonnay = Varietal.create(name:"Chardonnay", description:"Yummy yummy wine in mah tummy")
cabernet_sauvignon = Varietal.create(name:"Cabernet Sauvignon", description:"Yummy yummy wine in mah tummy")
merlot = Varietal.create(name:"Merlot", description:"Yummy yummy wine in mah tummy")
pinot_noir = Varietal.create(name:"Pinot Noir", description:"Yummy yummy wine in mah tummy")
zinfandel = Varietal.create(name:"Zinfandel", description:"Yummy yummy wine in mah tummy")
bordeaux_blend = Varietal.create(name:"Bordeaux Blend", description:"Yummy yummy wine in mah tummy")
riesling = Varietal.create(name:"Riesling", description:"Yummy yummy wine in mah tummy")
pinot_gris = Varietal.create(name:"Pinot Gris", description:"Yummy yummy wine in mah tummy")
concord = Varietal.create(name:"Concord", description:"Yummy yummy wine in mah tummy")
niagara = Varietal.create(name:"Niagara", description:"Yummy yummy wine in mah tummy")
rosé = Varietal.create(name:"Rosé", description:"Yummy yummy wine in mah tummy")