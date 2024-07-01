import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>['items'][number];

export const items: MenuItem[] = [
    {
        key: 'diamond',
        label: 'Diamond',
        children: [
            {
                key: 'diamond-shape',
                label: 'Diamond By Shape',
                type: 'group',
                children: [
                    {key: 'shape-1', label: 'Round'},
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
                    {key: 'about-1', label: 'Lucara Diamond'},
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
                    {key: 'ring-shape-1', label: 'Round'},
                    {key: 'ring-shape-2', label: 'Princess'},
                    {key: 'ring-shape-3', label: 'Cushion'},
                    {key: 'ring-shape-4', label: 'Oval'},
                    {key: 'ring-shape-5', label: 'Emerald'},
                    {key: 'ring-shape-6', label: 'Pear'},
                    {key: 'ring-shape-7', label: 'Asscher'},
                    {key: 'ring-shape-8', label: 'Heart'},
                    {key: 'ring-shape-9', label: 'Radient'},
                    {key: 'ring-shape-10', label: 'Marquise'},
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
                    {key: 'ring-designer-1', label: 'Zac Zac Posen'},
                    {key: 'ring-designer-2', label: 'Bella Vaughan'},
                    {key: 'ring-designer-3', label: 'Blue Nile Studio'},
                    {key: 'ring-designer-4', label: 'The Gallery Collection'},
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
                key: 'engagement-ring',
                label: 'Jewelry Classification',
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
                key: 'ring-metal',
                label: 'Ring metals',
                type: 'group',
                children: [
                    {key: 'jewelry-metal-1', label: 'White Gold'},
                    {key: 'jewelry-metal-2', label: 'Yellow Gold'},
                    {key: 'jewelry-metal-3', label: 'Rose Gold'},
                    {key: 'jewelry-metal-4', label: 'Platinum'},
                ]
            },
            {
                key: 'ring-designer',
                label: 'Designer Ring',
                type: 'group',
                children: [
                    {key: 'ring-designer-1', label: 'Zac Zac Posen'},
                    {key: 'ring-designer-2', label: 'Bella Vaughan'},
                    {key: 'ring-designer-3', label: 'Blue Nile Studio'},
                    {key: 'ring-designer-4', label: 'The Gallery Collection'},
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
                    {key: 'learn-5', label: 'Top 10 Engagement Rings'},
                ]
            }
        ]
    },
    {
        key: 'wedding-ring',
        label: 'Wedding Ring',
        children: [
            {
                key: 'ring-by-shape',
                label: 'Diamond Ring By Shape',
                type: 'group',
                children: [
                    {key: 'ring-shape-1', label: 'Round'},
                    {key: 'ring-shape-2', label: 'Princess'},
                    {key: 'ring-shape-3', label: 'Cushion'},
                    {key: 'ring-shape-4', label: 'Oval'},
                    {key: 'ring-shape-5', label: 'Emerald'},
                    {key: 'ring-shape-6', label: 'Pear'},
                    {key: 'ring-shape-7', label: 'Asscher'},
                    {key: 'ring-shape-8', label: 'Heart'},
                    {key: 'ring-shape-9', label: 'Radient'},
                    {key: 'ring-shape-10', label: 'Marquise'},
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
                    {key: 'ring-designer-1', label: 'Zac Zac Posen'},
                    {key: 'ring-designer-2', label: 'Bella Vaughan'},
                    {key: 'ring-designer-3', label: 'Blue Nile Studio'},
                    {key: 'ring-designer-4', label: 'The Gallery Collection'},
                ]
            },
            {
                key: 'learn-about',
                label: 'Diamond Ring By Shape',
                type: 'group',
                children: [
                    {key: 'learn-1', label: 'Find Your Ring Size'},
                    {key: 'learn-2', label: 'Learn About the 4Cs'},
                    {key: 'learn-3', label: 'Buying Guide'},
                    {key: 'learn-4', label: 'Metal Education'},
                    {key: 'learn-5', label: 'Top 10 Engagement Rings'},
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
                    {key: 'jewelry-type-1', label: 'Rings'},
                    {key: 'jewelry-type-2', label: 'Necklaces'},
                    {key: 'jewelry-type-3', label: 'Earings'},
                    {key: 'jewelry-type-4', label: 'Bracelets'},
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
                    {key: 'jewelry-firm-1', label: 'Van Cleef & Arpels'},
                    {key: 'jewelry-firm-2', label: 'Harry Winston'},
                    {key: 'jewelry-firm-3', label: 'Cartier'},
                    {key: 'jewelry-firm-4', label: 'Tiffany & Co'},
                    {key: 'jewelry-firm-5', label: 'Bvlgari'},
                ]
            },
            {
                key: 'learn-about',
                label: 'Learn About',
                type: 'group',
                children: [
                    {key: 'learn-1', label: 'Buying Guide'},
                    {key: 'learn-2', label: 'Learn About the 4Cs'},
                    {key: 'learn-3', label: 'Jewelry Education'},
                ]
            }
        ]
    },
    {
        key: 'gift',
        label: 'Gifts',
        children: [
            {
                key: 'jewelry-type',
                label: 'Jewelry Classification',
                type: 'group',
                children: [
                    {key: 'jewelry-type-1', label: 'Rings'},
                    {key: 'jewelry-type-2', label: 'Necklaces'},
                    {key: 'jewelry-type-3', label: 'Earings'},
                    {key: 'jewelry-type-4', label: 'Bracelets'},
                    {key: 'jewelry-type-5', label: 'Anklets'},
                    {key: 'jewelry-type-6', label: 'Bangles'},
                    {key: 'jewelry-type-7', label: 'Chokers'},
                    {key: 'jewelry-type-8', label: 'Pendants'},
                ]
            },
            {
                key: 'ring',
                label: 'Ring',
                type: 'group',
                children: [
                    {key: 'ring-1', label: 'Diamond Ring'},
                    {key: 'ring-2', label: 'Engagement Ring'},
                    {key: 'ring-3', label: 'Wedding Ring'},
                ]
            },
            {
                key: 'jewelry-firm',
                label: 'Jewelry Firm',
                type: 'group',
                children: [
                    {key: 'jewelry-firm-1', label: 'Van Cleef & Arpels'},
                    {key: 'jewelry-firm-2', label: 'Harry Winston'},
                    {key: 'jewelry-firm-3', label: 'Cartier'},
                    {key: 'jewelry-firm-4', label: 'Tiffany & Co'},
                    {key: 'jewelry-firm-5', label: 'Bvlgari'},
                ]
            },
            {
                key: 'learn-about',
                label: 'Learn About',
                type: 'group',
                children: [
                    {key: 'learn-1', label: 'Buying Guide'},
                    {key: 'learn-2', label: 'Learn About the 4Cs'},
                    {key: 'learn-3', label: 'Jewelry Education'},
                ]
            }
        ]
    },
    {
        key: 'learn-about',
        label: 'Learn About'
    },
    {
        key: 'about-us',
        label: 'About Us'
    }
]