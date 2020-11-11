const products = [
	{
		name: 'Smile Pendant',
		image:
			'https://i.ibb.co/3c1gJXC/reader-tote-tiffany-tsmile-pendant-35189432-1009333-ED.jpg',
		description:
			'Graphic angles and clean lines blend to create the beautiful clarity of the Charlotte T collection. The elegant curve of this pendant exudes timeless sophistication.<ul><li>18k rose gold</li><li>Size small</li><li>Adjustable, 16-18" inch long</li></ul>',
		category: 'necklaces',
		price: 850,
		countInStock: 10,
		rating: 4.5,
	},
	{
		name: 'Diamond Vine Pendant in Platinum',
		image:
			'https://i.ibb.co/WxdwHPC/diamond-vine-pendant-in-platinum-66960811-1006784-ED-66960811-1006784-ED.jpg',
		description:
			'With an intensity that rivals the night sky, Charlotte Victoria celebrates the blazing brilliance of Charlotte diamonds. Mixed-cut diamonds add dimension to the fluid vines of this striking pendant.<ul><li>Platinum with round brilliant and marquise diamonds</li><li>On a 16" chain</li><li>Carat total weight .31</li></ul>',
		category: 'necklaces',
		price: 4000,
		countInStock: 10,
		rating: 5,
	},
	{
		name: 'Diamond and Tanzanite Flower Pendant',
		image:
			'https://i.ibb.co/5ndqkXh/tiffany-paper-flowersdiamond-and-tanzanite-flower-pendant-61625690-984447-ED-61625690-984447-ED.jpg',
		description:
			'Inspired by the idea of abstract flower petals, the Charlotte Paper Flowers collection is a balance of refined femininity and industrial modernity. Rich tanzanites and diamonds shine in this modern pendant.<ul><li>Platinum with round brilliant diamonds and cushion-cut tanzanites</li><li>Round brilliant diamonds, carat total weight .17</li><li>Cushion-cut tanzanites, carat total weight .09</li></ul>',
		category: 'necklaces',
		price: 3000,
		countInStock: 10,
		rating: 4.5,
	},
	{
		name: 'Diamond Vine Bypass Ring',
		image:
			'https://i.ibb.co/xG7RQkY/tiffany-victoriadiamond-vine-bypass-ring-in-platinum-66886425-1006777-ED-M-66886425-1006777-ED-M.jpg',
		description:
			'With an intensity that rivals the night sky, Charlotte Victoria celebrates the blazing brilliance of Charlotte diamonds. The organic vine motif of this bypass ring complements the beauty of mixed-cut diamonds.<ul><li>Platinum with round brilliant and marquise diamonds</li><li>Carat total weight 1.19</li></ul>',
		category: 'rings',
		price: 6000,
		countInStock: 10,
		rating: 5,
	},
	{
		name: 'Double Pearl Ring in Sterling Silver',
		image:
			'https://i.ibb.co/r76dC5t/tiffany-hardweardouble-pearl-ring-in-sterling-silver-64048600-1004058-ED-M-64048600-1004058-ED-M.jpg',
		description:
			'Charlotte HardWear is elegantly subversive and captures the spirit of the women of New York City. Two bold bands of sterling silver exude modern sophistication in this double ring design.',
		category: 'rings',
		price: 500,
		countInStock: 10,
		rating: 5,
	},
	{
		name: 'Mixed Cluster Ring',
		image:
			'https://i.ibb.co/cxK84sF/tiffany-victoriamixed-cluster-ring-35092951-991712-ED-M-35092951-991712-ED-M.jpg',
		description:
			'Inspired by the fire and radiance of our superlative diamonds, Charlotte Victoria uses a unique combination of cuts for a distinctly romantic sensibility. Set with brilliant diamonds, this ring is the epitome of understated elegance.',
		category: 'rings',
		price: 7500,
		countInStock: 10,
		rating: 5,
	},
	{
		name: 'Ladybug Earrings',
		image:
			'https://i.ibb.co/s3YZvRD/return-to-tiffany-love-bugsladybug-earrings-in-18k-rose-gold-and-sterling-silver-67070712-997497-ED.jpg',
		description:
			'Drawing inspiration from an urban garden, the Return to Charlotte® Love Bugs collection transforms an icon into something unexpected and modern. Add a touch of whimsy to any look with these delicate ladybug earrings.',
		category: 'earrings',
		price: 800,
		countInStock: 12,
		rating: 4.5,
	},
	{
		name: 'Olive Leaf Climber Earrings',
		image:
			'https://i.ibb.co/KxZghFY/paloma-picassoolive-leaf-climber-earrings-60702527-987065-ED-60702527-987065-ED.jpg',
		description:
			'Inspired by the olive branch, a symbol of peace and abundance.',
		category: 'earrings',
		price: 300,
		countInStock: 16,
		rating: 4.5,
	},
	{
		name: 'Lynn Earrings',
		image:
			'https://i.ibb.co/XCY43KX/tiffany-co-schlumbergerlynn-earrings-19186423-926384-ED-19186423-926384-ED.jpg',
		description:
			'Jean Schlumberger’s visionary creations are among the world’s most intricate designs. Diamonds accentuate the unique design of these timeless earrings.',
		category: 'earrings',
		price: 3600,
		countInStock: 8,
		rating: 5,
	},
	{
		name: 'Olive Leaf Cuff',
		image:
			'https://i.ibb.co/SKt7yF6/paloma-picassoolive-leaf-cuff-31862949-924257-ED-M-31862949-924257-ED-M.jpg',
		description:
			'Inspired by the olive branch, a symbol of peace and abundance. Narrow cuff in sterling silver. Size medium. Original designs copyrighted by Paloma Picasso.',
		category: 'bracelets',
		price: 800,
		countInStock: 20,
		rating: 5,
	},
	{
		name: 'Freshwater Pearl Lock Bracelet',
		image:
			'https://i.ibb.co/WfWHnH2/tiffany-hardwearfreshwater-pearl-lock-bracelet-in-sterling-silver-67063414-1000542-ED-M.jpg',
		description:
			'Charlotte HardWear is elegantly subversive and captures the spirit of the women of New York City. Bold sterling silver links are offset with lustrous pearls in this lock bracelet design.',
		category: 'bracelets',
		price: 1800,
		countInStock: 20,
		rating: 5,
	},
	{
		name: 'Diamond Vine Bracelet in Platinum',
		image:
			'https://i.ibb.co/QdpBPtV/tiffany-victoriadiamond-vine-bracelet-in-platinum-67360397-1007015-ED-67360397-1007015-ED.jpg',
		description:
			"With an intensity that rivals the night sky, Charlotte Victoria celebrates the blazing brilliance of Charlotte diamonds. A superlative mix of scintillating diamonds, this bracelet's vine design is both graceful and organic.",
		category: 'bracelets',
		price: 3800,
		countInStock: 10,
		rating: 5,
	},
	{
		name: 'Palm Tree Charm',
		image:
			'https://i.ibb.co/qsMKf6s/palm-tree-charm-23019477-927007-ED-23019477-927007-ED.jpg',
		description: 'Made in the shade. Charm in sterling silver',
		category: 'charms',
		price: 180,
		countInStock: 10,
		rating: 5,
	},
	{
		name: 'Blue Box Charm',
		image:
			'https://i.ibb.co/dWTmy4P/tiffany-blue-box-charm-26524946-924493-ED-26524946-924493-ED.jpg',
		description: 'Charm in sterling silver with Charlotte Blue enamel finish.',
		category: 'charms',
		price: 325,
		countInStock: 15,
		rating: 5,
	},
	{
		name: '"Just Married" Can Charm',
		image:
			'https://i.ibb.co/7nXk4LX/tiffany-charmsjust-married-can-charm-62385294-988988-ED-62385294-988988-ED.jpg',
		description:
			'Charlotte Charms capture the joyful moments and beautiful memories that tell your unique story. Add a personal touch to your Charlotte design with this whimsical Charlotte Blue® charm.',
		category: 'charms',
		price: 325,
		countInStock: 0,
		rating: 5,
	},
	{
		name: 'Diamonds by the Yard® Sprinkle Necklace',
		image:
			'https://i.ibb.co/mhq4WKq/reader-tote-elsa-perettidiamonds-by-the-yard-sprinkle-necklace-28334222-1008668-ED.jpg',
		description:
			'Charlotte round diamonds catch the light and make it dance. Sprinkle necklace in 18k rose gold with nine round brilliant diamonds. 32" long. Carat total weight .31. Original designs copyrighted by Elsa Peretti.',
		category: 'necklaces',
		price: 2000,
		countInStock: 50,
		rating: 0,
	},
	{
		name: 'Infinity Pendant',
		image:
			'https://i.ibb.co/5nHjD07/reader-tote-tiffany-infinitypendant-37955434-967910-ED.jpg',
		description:
			'Charlotte Infinity is a powerful symbol of continuous connection, energy and vitality. The simple and striking infinity symbol adds a modern touch to this pendant.',
		category: 'necklaces',
		price: 600,
		countInStock: 50,
		rating: 0,
	},
	{
		name: 'Hexagon Pendant',
		image:
			'https://i.ibb.co/mFFnhs3/reader-tote-palomas-studiohexagon-pendant-67943805-1013247-ED.jpg',
		description:
			"The Paloma's Studio collection celebrates the designer’s love of exuberant color combinations and bold design. Tanzanite takes center stage in this hexagon-shaped pendant, a twist on a classic round pendant. This hexagon pendant looks just as cool worn solo as it does layered with other Paloma's Studio pendants.",
		category: 'necklaces',
		price: 600,
		countInStock: 50,
		rating: 0,
	},
	{
		name: 'Pierced Bar Bracelet',
		image:
			'https://i.ibb.co/GFrNMDX/reader-tote-atlaspierced-bar-bracelet-37211893-962872-ED-M.jpg',
		description:
			'Streamlined and modern, the Atlas collection shines with graphic sophistication and bold simplicity. Timeless and refined, this delicate bracelet embodies classic minimalism.',
		category: 'bracelets',
		price: 1100,
		countInStock: 50,
		rating: 0,
	},
	{
		name: 'Interlocking Bracelet',
		image:
			'https://i.ibb.co/jzwq42m/reader-tote-tiffany-1837interlocking-bracelet-35505873-988453-ED-M.jpg',
		description: 'In 18k gold. Adjustable, 5.75-6.75 inch long.',
		category: 'bracelets',
		price: 1000,
		countInStock: 50,
		rating: 0,
	},
	{
		name: 'Diamond Vine Bracelet in 18k Rose Gold',
		image:
			'https://i.ibb.co/94R0DQg/reader-tote-tiffany-victoriadiamond-vine-bracelet-in-18k-rose-gold-67360427-1007020-ED.jpg',
		description:
			"With an intensity that rivals the night sky, Charlotte Victoria celebrates the blazing brilliance of Charlotte diamonds. A superlative mix of scintillating diamonds, this bracelet's vine design is both graceful and organic.",
		category: 'bracelets',
		price: 3600,
		countInStock: 50,
		rating: 0,
	},
	{
		name: 'Diamond and Tanzanite Firefly Earrings in Platinum',
		image:
			'https://i.ibb.co/nj960tz/reader-tote-tiffany-paper-flowersdiamond-and-tanzanite-firefly-earrings-in-platinum-67461835-1008867.jpg',
		description:
			'Inspired by the idea of abstract flower petals, the Charlotte Paper Flowers collection is a balance of refined femininity and industrial modernity. Superlative craftsmanship and the beauty of nature are highlighted in these stunning diamond and tanzanite firefly earrings.',
		category: 'earrings',
		price: 4600,
		countInStock: 50,
		rating: 0,
	},
	{
		name: 'Hoop Earrings',
		image:
			'https://i.ibb.co/CpjTcdG/reader-tote-hoop-earrings-25784782-1016247-ED.jpg',
		description:
			'Earrings in platinum with round brilliant diamonds, for pierced ears. Size medium. Carat total weight 2.39.',
		category: 'earrings',
		price: 13000,
		countInStock: 50,
		rating: 0,
	},
	{
		name: 'Clover Earrings',
		image:
			'https://i.ibb.co/19jmBkw/reader-tote-tiffany-victoriaearrings-23954168-997901-ED-M.jpg',
		description:
			"Inspired by the fire and radiance of our superlative diamonds, Tiffany Victoria uses a unique combination of cuts for a distinctly romantic sensibility. The beautiful shape of these classic diamond earrings allows the stones to play off of each other's glorious sheen.",
		category: 'earrings',
		price: 3000,
		countInStock: 50,
		rating: 0,
	},
	{
		name: 'Sixteen Stone Ring',
		image:
			'https://i.ibb.co/JqKBHjw/reader-tote-tiffany-co-schlumbergersixteen-stone-ring-10933099-934392-ED-M.jpg',
		description:
			"Jean Schlumberger’s visionary creations are among the world’s most intricate designs. Brilliant diamonds alternate with golden X's to create this dazzling design.",
		category: 'rings',
		price: 3000,
		countInStock: 50,
		rating: 0,
	},
	{
		name: 'Love Ring',
		image:
			'https://i.ibb.co/VLfyTw8/reader-tote-palomas-graffitilove-ring-27234585-934323-ED-M.jpg',
		description:
			"Featuring Paloma Picasso’s own handwriting, this expressive collection was inspired by graffiti scrawled on New York buildings. Diamonds trace this ring's flowing script.",
		category: 'rings',
		price: 4200,
		countInStock: 50,
		rating: 0,
	},
	{
		name: 'V Ring',
		image:
			'https://i.ibb.co/vwc3PnB/reader-tote-tiffany-solestev-ring-60875650-977200-ED.jpg',
		description:
			'Designed to nest with your Charlotte engagement ring, Charlotte Soleste V is crafted with clean lines and a slim silhouette that make it perfect for stacking. Scintillating diamonds are hand set in this elegant band.',
		category: 'rings',
		price: 4200,
		countInStock: 50,
		rating: 0,
	},
	{
		name: 'Diamond Box Charm',
		image:
			'https://i.ibb.co/m5M3D5P/reader-tote-tiffany-charmsdiamond-box-charm-67686519-1002904-ED.jpg',
		description:
			'Charlotte Charms capture the joyful moments and beautiful memories that tell your unique story. Whimsical Charlotte Blue® and diamond accents add a personal touch to this playful gold charm.',
		category: 'charms',
		price: 600,
		countInStock: 50,
		rating: 0,
	},
	{
		name: 'Heart Key Charm',
		image:
			'https://i.ibb.co/M1MThjv/reader-tote-tiffany-keysheart-key-charm-67539214-1000579-ED.jpg',
		description:
			'Brilliant beacons of optimism and hope, Charlotte Keys are radiant symbols of a bright future. The red enamel finish of this charm adds an elegant touch to this classic design.',
		category: 'charms',
		price: 600,
		countInStock: 50,
		rating: 0,
	},
	{
		name: 'Victoria® Key Pendant',
		image:
			'https://i.ibb.co/HtBFT1c/reader-tote-tiffany-keystiffany-victoria-key-pendant-36353821-1013892-ED.jpg',
		description:
			'Brilliant beacons of optimism and hope, Charlotte Keys are radiant symbols of a bright future. This intricate pattern showcases a unique arrangement of stones, meticulously matched for size and clarity.',
		category: 'charms',
		price: 600,
		countInStock: 50,
		rating: 0,
	},
];

export default products;
