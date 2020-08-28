# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# --------------------------Regions--------------------------
northeast = 1
Region.create(name:"Northeast", image_url:"https://ctwine.com/wp-content/uploads/2012/07/GVwinery.jpg", description:"New York, Connecticut, Massachusetts, Pennsylvania, and New Jersey specialising in Concord, Rosé, Merlot, Riesling, and Ice Wine.")
southeast = 2
Region.create(name:"Southeast", image_url:"https://asset---north-carolina.bldg15.net/img/7/4/74f5ee8e-04b6-4c73-a44b-e8c1f1a2105f/JOLO%20Winery%20and%20Vineyards-crop(1,0.848,0,0.070,r4).jpg", description:"Virginia and North Carolina specialising in Chardonnay, Bordeaux Blend, Viognier, and Scuppernong.")
northwest = 3
Region.create(name:"Northwest", image_url:"https://s.hdnux.com/photos/73/36/77/15593462/7/gallery_xlarge.jpg", description:"Washington and Oregon specialising in Bordeaux Blend, Riesling, Syrah, Pinot Noir, Pinot Gris, and Chardonnay.")
west = 4
Region.create(name:"West", image_url:"https://winecountry-media.s3.amazonaws.com/21083-media-SlideshowImage1-VSattuiWinery-Building-1200x600.jpg", description:"California specialising in Chardonnay, Cabernet Sauvignon, Zinfandel, Pinot Noir, and Syrah.")
southwest = 5
Region.create(name:"Southwest", image_url:"https://www.jamessuckling.com/shared/uploads/2019/11/Tasting-room-at-William-Chris-Winery-in-Hye-Texas.jpg", description:"Arizona, New Mexico, and Texas specialising in Bordeaux Blend, Riesling, Sparkling Wine, Viognier, Tempranillo, and Mourvedre.")
midwest = 6
Region.create(name:"Midwest", image_url:"https://media.timeout.com/images/105685514/1372/772/image.jpg", description:"Illinois, Michigan, and Missouri specialising in Riesling, Pinot Noir, Pinot Grigio, Norton, Chamborcin, Vidal, and Chardonel varietals.")

# --------------------------Varietals--------------------------

chardonnay = 1
Varietal.create(name:"Chardonnay", description:"One of the world’s most popular grapes, Chardonnay is made in a wide range of styles from lean, sparkling Blanc de Blancs to rich, creamy white wines aged in oak.", image_url:"https://media.winefolly.com/Chardonnay-wine-tasting-WineFolly-768x576.jpg")
cabernet_sauvignon = 2
Varietal.create(name:"Cabernet Sauvignon", description:"The world’s most popular red wine grape is a natural cross between Cabernet Franc and Sauvignon Blanc from Bordeaux, France. Cabernet Sauvignon is loved for its high concentration and age worthiness.", image_url:"https://media.winefolly.com/Cabernet-Sauvignon-wine-tasting-WineFolly-768x576.jpg")
merlot = 3
Varietal.create(name:"Merlot", description:"Merlot is loved for it’s boisterous black cherry flavors, supple tannins, and chocolatey finish. On the high end, it’s often mistaken with Cabernet Sauvignon and commonly blended with it.", image_url:"https://media.winefolly.com/Merlot-wine-tasting-WineFolly-768x576.jpg")
pinot_noir = 4
Varietal.create(name:"Pinot Noir", description:"Pinot Noir is the world’s most popular light-bodied red wine. It’s loved for its red fruit, flower, and spice aromas that are accentuated by a long, smooth finish.", image_url:"https://media.winefolly.com/Pinot-Noir-wine-tasting-WineFolly-768x576.jpg")
zinfandel = 5
Varietal.create(name:"Zinfandel", description:"A fruit-forward-yet-bold red that’s loved for its red fruit flavors and smoky exotic spice notes. Originally from Croatia and related to top Croatian grape, Plavic Mali.", image_url:"https://media.winefolly.com/Zinfandel-wine-tasting-WineFolly-768x576.jpg")
bordeaux_blend = 6
Varietal.create(name:"Bordeaux Blend", description:"A red blend that’s dominated by Cabernet Sauvignon and Merlot, along with several other grape varieties native to the Bordeaux region of France.", image_url:"https://media.winefolly.com/Bordeaux-Blend-Red-wine-tasting-WineFolly-768x576.jpg")
riesling = 7
Varietal.create(name:"Riesling", description:"An aromatic white variety that can produce white wines ranging in style from bone-dry to very sweet. Germany is the world’s most important producer of Riesling.", image_url:"https://media.winefolly.com/Riesling-wine-tasting-WineFolly-768x576.jpg")
pinot_grigio = 8
Varietal.create(name:"Pinot Grigio", description:"Pinot Gris (aka Pinot Grigio) is a pinkish grape mutation of Pinot Noir. It’s famously known for zesty white wines, but can also be used for rosé. Look to Northern Italy, Oregon, and Alsace for benchmark examples.", image_url:"https://media.winefolly.com/Pinot-Gris-wine-tasting-WineFolly-768x576.jpg")
concord = 9
Varietal.create(name:"Concord", description:"An American grape of the vitis Labrusca species from Concord, Massachusetts; it is the most planted grape in New York, but used more for juice and flavoring than winemaking.", image_url:"https://media.winefolly.com/Concord-wine-tasting-WineFolly-768x576.jpg")
rosé = 10
Varietal.create(name:"Rosé", description:"Rosé was once only thought of as fruity and cloying; these dry and mineral driven pink wines (that contain a plethora of grapes) have proven that rosé can be serious. Seriously delicious.", image_url:"https://media.winefolly.com/Provence-rose-wine-tasting-WineFolly-768x576.jpg")

# --------------------------Vineyards--------------------------

Vineyard.create(name:"Gouveia Vineyards", address:"1339 Whirlwind Hill Rd, Wallingford, CT 06492", wines_available: ["Chardonnay, Pinot Grigio, Cabernet Sauvignon, Merlot, Pinot Noir, Zinfandel"], region_id: northeast)

Vineyard.create(name:"Willies Crazy Wine Shack", address:"10189 N Delaware Dr, Bangor, PA 18013", wines_available: ["Riesling", "Pinot Noir", "Rosé", "Concord", "Chardonnay"], region_id: northeast)

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

Cellar.create(vineyard_id: 6, varietal_id: zinfandel)
Cellar.create(vineyard_id: 6, varietal_id: bordeaux_blend)
Cellar.create(vineyard_id: 6, varietal_id: riesling)
Cellar.create(vineyard_id: 6, varietal_id: concord)