import config from '@/config';
import Link from '@/components/Link';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const items: MenuItem[] = [
    {
        key: 'diamond',
        label: (
            <Link to={config.routes.public.diamond} underline zoom scroll>
                Diamond
            </Link>
        ),
        children: [
            {
                key: 'diamond-shape',
                label: 'Diamond By Shape',
                type: 'group',
                children: [
                    {key: 'shape-1', label: (
                        <Link to={`${config.routes.public.diamondList.replace(":diamondShape", "round-shape")}`}>
                          Round
                        </Link>
                      ),},
                    {key: 'shape-2', label: 'Princess'},
                    {key: 'shape-3', label: 'Cushion'},
                    {key: 'shape-4', label: 'Oval'},
                    {key: 'shape-5', label: 'Emerald'},
                    {key: 'shape-6', label: 'Pear'},
                    {key: 'shape-7', label: 'Asscher'},
                    {key: 'shape-8', label: 'Heart'},
                    {key: 'shape-9', label: 'Radient'},
                    {key: 'shape-10', label: 'Marquise'},
                ]
            },
            {
                key: 'diamond-color',
                label: 'Diamond By Color',
                type: 'group',
                children: [
                    {key: 'color-1', label: 'Color Grade D-Z'},
                    {key: 'color-2', label: 'Fancy Color Diamonds'},
                ]
            },
            {
                key: 'diamond-cutter',
                label: 'Diamond Cutter',
                type: 'group',
                children: [
                    {key: 'cutter-1', label: 'Lucara Diamond'},
                    {key: 'cutter-2', label: 'Petra Diamonds'},
                    {key: 'cutter-3', label: 'Rio Tinto Diamonds'},
                    {key: 'cutter-4', label: 'Arlosa'},
                    {key: 'cutter-5', label: 'De Beers Group'},
                ]
            },
            {
                key: 'learn-about',
                label: 'Learn About',
                type: 'group',
                children: [
                    {key: 'about-1', label: 'Diamond Shape'},
                    {key: 'about-2', label: 'Learn about 4Cs'},
                    {key: 'about-3', label: 'Diamond Certification'},
                ]
            }
        ]
    },
    {
        key: 'diamond-ring',
        label: 'Diamond Ring',
        children: [
            {
                key: 'ring-by-shape',
                label: 'Diamond Ring By Shape',
                type: 'group',
                children: [
                    {key: 'ring-shape-1',  label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "round-ring")}`}>
                          Round
                        </Link>
                      ),
                    },
                    {key: 'ring-shape-2', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "princess-ring")}`}>
                          Princess
                        </Link>
                      ),
                    },
                    {key: 'ring-shape-3', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "cushion-ring")}`}>
                          Cushion
                        </Link>
                      )
                    },
                    {key: 'ring-shape-4', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "oval-ring")}`}>
                          Oval
                        </Link>
                      )
                    },
                    {key: 'ring-shape-5', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "emerald-ring")}`}>
                          Emerald
                        </Link>
                      )
                    },
                    {key: 'ring-shape-6', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "pear-ring")}`}>
                          Pear
                        </Link>
                      )
                    },
                    {key: 'ring-shape-7', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "asscher-ring")}`}>
                          Asscher
                        </Link>
                      )
                    },
                    {key: 'ring-shape-8', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "heart-ring")}`}>
                          Heart
                        </Link>
                      )},
                    {key: 'ring-shape-9', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "radiant-ring")}`}>
                          Radiant
                        </Link>
                      )},
                    {key: 'ring-shape-10', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "marquise-ring")}`}>
                          Marquise
                        </Link>
                      )},
                ]
            },
            {
                key: 'ring-metals',
                label: 'Ring metals',
                type: 'group',
                children: [
                    {key: 'ring-metal-1', label: 'White Gold'},
                    {key: 'ring-metal-2', label: 'Yellow Gold'},
                    {key: 'ring-metal-3', label: 'Rose Gold'},
                    {key: 'ring-metal-4', label: 'Platinum'},
                ]
            },
            {
                key: 'ring-designer',
                label: 'Designer Ring',
                type: 'group',
                children: [
                    {key: 'ring-designer-1', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "zaczacposen")}`}>
                          Zac Zac Posen
                        </Link>
                      )},
                    {key: 'ring-designer-2', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "bellavaughan")}`}>
                         Bella Vaughan
                        </Link>
                      )},
                    {key: 'ring-designer-3', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "bluenile")}`}>
                         Blue Nile Studio
                        </Link>
                      )},
                    {key: 'ring-designer-4', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "thegallerycollection")}`}>
                         The Gallery Collection
                        </Link>
                      )},
                ]
            },
            {
                key: 'learn-about',
                label: 'Learn About',
                type: 'group',
                children: [
                    {key: 'learn-1', label: 'Find Your Ring Size'},
                    {key: 'learn-2', label: 'Learn About the 4Cs'},
                    {key: 'learn-3', label: 'Buying Guide'},
                    {key: 'learn-4', label: 'Metal Education'},
                ]
            }
        ]
    },
    {
        key: 'engagement-ring',
        label: 'Engagement Ring',
        children: [
            {
                key: 'engagement-ring-shape',
                label: 'Ring by Shape',
                type: 'group',
                children: [
                    {key: 'engagement-ring-1', label: 'Round'},
                    {key: 'engagement-ring-2', label: 'Princess'},
                    {key: 'engagement-ring-3', label: 'Cushion'},
                    {key: 'engagement-ring-4', label: 'Oval'},
                    {key: 'engagement-ring-5', label: 'Emerald'},
                    {key: 'engagement-ring-6', label: 'Pear'},
                    {key: 'engagement-ring-7', label: 'Asscher'},
                    {key: 'engagement-ring-8', label: 'Heart'},
                    {key: 'engagement-ring-9', label: 'Radient'},
                    {key: 'engagement-ring-10 ', label: 'Marquise'},
                ]
            },
            {
                key: 'engagement-ring-metal',
                label: 'Ring metals',
                type: 'group',
                children: [
                    {key: 'engagement-ring-metal-1', label: 'White Gold'},
                    {key: 'engagement-ring-metal-2', label: 'Yellow Gold'},
                    {key: 'engagement-ring-metal-3', label: 'Rose Gold'},
                    {key: 'engagement-ring-metal-4', label: 'Platinum'},
                ]
            },
            {
                key: 'ring-designer',
                label: 'Designer Ring',
                type: 'group',
                children: [
                    {key: 'engagement-ring-designer-1', label: 'Zac Zac Posen'},
                    {key: 'engagement-ring-designer-2', label: 'Bella Vaughan'},
                    {key: 'engagement-ring-designer-3', label: 'Blue Nile Studio'},
                    {key: 'engagement-ring-designer-4', label: 'The Gallery Collection'},
                ]
            },
            {
                key: 'learn-about-engagement-ring',
                label: 'Learn About',
                type: 'group',
                children: [
                    {key: 'learn-engagement-ring-1', label: 'Find Your Ring Size'},
                    {key: 'learn-engagement-ring-2', label: 'Learn About the 4Cs'},
                    {key: 'learn-engagement-ring-3', label: 'Buying Guide'},
                    {key: 'learn-engagement-ring-4', label: 'Metal Education'},
                    {key: 'learn-engagement-ring-5', label: 'Top 10 Engagement Rings'},
                ]
            }
        ]
    },
    {
        key: 'wedding-ring',
        label: 'Wedding Ring',
        children: [
            {
                key: 'wedding-ring-by-shape',
                label: 'Diamond Ring By Shape',
                type: 'group',
                children: [
                    {key: 'wedding-ring-shape-1', label: 'Round'},
                    {key: 'wedding-ring-shape-2', label: 'Princess'},
                    {key: 'wedding-ring-shape-3', label: 'Cushion'},
                    {key: 'wedding-ring-shape-4', label: 'Oval'},
                    {key: 'wedding-ring-shape-5', label: 'Emerald'},
                    {key: 'wedding-ring-shape-6', label: 'Pear'},
                    {key: 'wedding-ring-shape-7', label: 'Asscher'},
                    {key: 'wedding-ring-shape-8', label: 'Heart'},
                    {key: 'wedding-ring-shape-9', label: 'Radient'},
                    {key: 'wedding-ring-shape-10', label: 'Marquise'},
                ]
            },
            {
                key: 'ring-metals',
                label: 'Ring metals',
                type: 'group',
                children: [
                    {key: 'wedding-ring-metal-1', label: 'White Gold'},
                    {key: 'wedding-ring-metal-2', label: 'Yellow Gold'},
                    {key: 'wedding-ring-metal-3', label: 'Rose Gold'},
                    {key: 'wedding-ring-metal-4', label: 'Platinum'},
                ]
            },
            {
                key: 'wedding-ring-designer',
                label: 'Designer Ring',
                type: 'group',
                children: [
                    {key: 'wedding-ring-designer-1', label: 'Zac Zac Posen'},
                    {key: 'wedding-ring-designer-2', label: 'Bella Vaughan'},
                    {key: 'wedding-ring-designer-3', label: 'Blue Nile Studio'},
                    {key: 'wedding-ring-designer-4', label: 'The Gallery Collection'},
                ]
            },
            {
                key: 'learn-about-wedding-ring',
                label: 'Learn about',
                type: 'group',
                children: [
                    {key: 'learn-wedding-ring-1', label: 'Find Your Ring Size'},
                    {key: 'learn-wedding-ring-2', label: 'Learn About the 4Cs'},
                    {key: 'learn-wedding-ring-3', label: 'Buying Guide'},
                    {key: 'learn-wedding-ring-4', label: 'Metal Education'},
                    {key: 'learn-wedding-ring-5', label: 'Top 10 Engagement Rings'},
                ]
            }
        ]
    },
    {
        key: 'jewelry',
        label: 'Jewelry',
        children: [
            {
                key: 'jewelry-type',
                label: 'Jewelry Classification',
                type: 'group',
                children: [
                    {key: 'jewelry-type-1', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "ring")}`}>
                         Rings
                        </Link>
                      )
                    },
                    {key: 'jewelry-type-2', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "necklace")}`}>
                         Necklaces
                        </Link>
                      )},
                    {key: 'jewelry-type-3', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "earrings")}`}>
                         Earrings
                        </Link>
                      )},
                    {key: 'jewelry-type-4', label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "bracelet")}`}>
                         Bracelets
                        </Link>
                      )},
                    {key: 'jewelry-type-5', label: 'Anklets'},
                    {key: 'jewelry-type-6', label: 'Bangles'},
                    {key: 'jewelry-type-7', label: 'Chokers'},
                    {key: 'jewelry-type-8', label: 'Pendants'},
                ]
            },
            {
                key: 'jewelry-metals',
                label: 'Jewelry metals',
                type: 'group',
                children: [
                    {key: 'jewelry-metals-1', label: 'White Gold'},
                    {key: 'jewelry-metal-2', label: 'Yellow Gold'},
                    {key: 'jewelry-metal-3', label: 'Rose Gold'},
                    {key: 'jewelry-metal-4', label: 'Platinum'},
                ]
            },
            {
                key: 'jewelry-firm',
                label: 'Jewelry Firm',
                type: 'group',
                children: [
                    {key: 'jewelry-firm-1',  label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "vancleefnarpels")}`}>
                        Van Cleef & Arpels Firm
                        </Link>
                      )
                    },
                    {key: 'jewelry-firm-2',  label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "harrywinston")}`}>
                         Harry Winston
                        </Link>
                      )},
                    {key: 'jewelry-firm-3',  label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "cartier")}`}>
                        Cartier
                        </Link>
                      )},
                    {key: 'jewelry-firm-4',  label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "tiffanyco")}`}>
                         Tiffany & Co
                        </Link>
                      )},
                    {key: 'jewelry-firm-5',  label: (
                        <Link to={`${config.routes.public.productList.replace(":jewelryType", "bvlgari")}`}>
                        Bvlgari
                        </Link>
                      )},
                ]
            },
            {
                key: 'learn-about-jewelry',
                label: 'Learn About',
                type: 'group',
                children: [
                    {key: 'learn-jewelry-1', label: 'Buying Guide'},
                    {key: 'learn-jewelry-2', label: 'Learn About the 4Cs'},
                    {key: 'learn-jewelry-3', label: 'Jewelry Education'},
                ]
            }
        ]
    },
    {
        key: 'gift',
        label: (
            <Link to={config.routes.public.gift} underline zoom scroll>
                Gift
            </Link>
        ),
        children: [
            {
                key: 'jewelry-type',
                label: 'Jewelry Classification',
                type: 'group',
                children: [
                    {key: 'gift-jewelry-type-1', label: 'Rings'},
                    {key: 'gift-jewelry-type-2', label: 'Necklaces'},
                    {key: 'gift-jewelry-type-3', label: 'Earings'},
                    {key: 'gift-jewelry-type-4', label: 'Bracelets'},
                    {key: 'gift-jewelry-type-5', label: 'Anklets'},
                    {key: 'gift-jewelry-type-6', label: 'Bangles'},
                    {key: 'gift-jewelry-type-7', label: 'Chokers'},
                    {key: 'gift-jewelry-type-8', label: 'Pendants'},
                ]
            },
            {
                key: 'gift-ring',
                label: 'Ring',
                type: 'group',
                children: [
                    {key: 'gift-ring-1', label: 'Diamond Ring'},
                    {key: 'gift-ring-2', label: 'Engagement Ring'},
                    {key: 'gift-ring-3', label: 'Wedding Ring'},
                ]
            },
            {
                key: 'gift-jewelry-firm',
                label: 'Jewelry Firm',
                type: 'group',
                children: [
                    {key: 'gift-jewelry-firm-1', label: 'Van Cleef & Arpels'},
                    {key: 'gift-jewelry-firm-2', label: 'Harry Winston'},
                    {key: 'gift-jewelry-firm-3', label: 'Cartier'},
                    {key: 'gift-jewelry-firm-4', label: 'Tiffany & Co'},
                    {key: 'gift-jewelry-firm-5', label: 'Bvlgari'},
                ]
            },
            {
                key: 'learn-about-gift',
                label: 'Learn About',
                type: 'group',
                children: [
                    {key: 'learn-gift-1', label: 'Buying Guide'},
                    {key: 'learn-gift-2', label: 'Learn About the 4Cs'},
                    {key: 'learn-gift-3', label: 'Jewelry Education'},
                ]
            }
        ]
    },
    {
        key: 'learn-about',
        label: (
            <Link to={config.routes.public.learn} underline zoom scroll>
                Learn about
            </Link>
        ),
    },
    {
        key: 'about-us',
        label: (
            <Link to={config.routes.public.about} underline zoom scroll>
                About Us
            </Link>
        )
    }
]