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
                      )},
                    {key: 'shape-2', label: (
                        <Link to={`${config.routes.public.diamondList.replace(":diamondShape", "princess-shape")}`}>
                         Princess
                        </Link>
                      )},
                    {key: 'shape-3', label: (
                        <Link to={`${config.routes.public.diamondList.replace(":diamondShape", "cushion-shape")}`}>
                          Cushion
                        </Link>
                      )},
                    {key: 'shape-4', label: (
                        <Link to={`${config.routes.public.diamondList.replace(":diamondShape", "oval-shape")}`}>
                          Oval
                        </Link>
                      )},
                    {key: 'shape-5', label: (
                        <Link to={`${config.routes.public.diamondList.replace(":diamondShape", "emerald-shape")}`}>
                          Emerald
                        </Link>
                      )},
                    {key: 'shape-6', label: (
                        <Link to={`${config.routes.public.diamondList.replace(":diamondShape", "pear-shape")}`}>
                          Pear
                        </Link>
                      )},
                    {key: 'shape-7', label: (
                        <Link to={`${config.routes.public.diamondList.replace(":diamondShape", "asscher-shape")}`}>
                         Asscher
                        </Link>
                      )},
                    {key: 'shape-8', label: (
                        <Link to={`${config.routes.public.diamondList.replace(":diamondShape", "heart-shape")}`}>
                         Heart
                        </Link>
                      )},
                    {key: 'shape-9', label: (
                        <Link to={`${config.routes.public.diamondList.replace(":diamondShape", "radiant-shape")}`}>
                          Radiant
                        </Link>
                      )},
                    {key: 'shape-10', label: (
                        <Link to={`${config.routes.public.diamondList.replace(":diamondShape", "marquise-shape")}`}>
                          Marquise
                        </Link>
                      )},
                ]
            },
           
            {
                key: 'diamond-cutter',
                label: 'Diamond Cutter',
                type: 'group',
                children: [
                    {key: 'cutter-1', label: (
                        <Link to={`${config.routes.public.cutterList.replace(":diamondCutter", "lucara")}`}>
                          Lucara Diamond
                        </Link>
                      )},
                    {key: 'cutter-2', label: (
                        <Link to={`${config.routes.public.cutterList.replace(":diamondCutter", "petra")}`}>
                          Petra Diamonds
                        </Link>
                      )},
                    {key: 'cutter-3', label: (
                        <Link to={`${config.routes.public.cutterList.replace(":diamondCutter", "riotinto")}`}>
                          Rio Tinto Diamonds
                        </Link>
                      )},
                    {key: 'cutter-4', label: (
                        <Link to={`${config.routes.public.cutterList.replace(":diamondCutter", "arlosa")}`}>
                         Arlosa
                        </Link>
                      )},
                    {key: 'cutter-5', label: (
                        <Link to={`${config.routes.public.cutterList.replace(":diamondCutter", "debeers")}`}>
                         De Beers Group
                        </Link>
                      ),},
                ]
            },
            {
                key: 'learn-about',
                label: 'Learn About',
                type: 'group',
                children: [
                    {key: 'about-1', label: (
                        <Link to={config.routes.public.shape} underline zoom scroll>
                            Diamond Shape
                        </Link>
                    )},
                    {key: 'about-2',  label: (
                        <Link to={config.routes.public.cs} underline zoom scroll>
                            Learn About the 4Cs
                        </Link>
                    )},
                    {key: 'about-3', label: (
                        <Link to={config.routes.public.certification} underline zoom scroll>
                            Diamond Certification
                        </Link>
                    )},
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
                        <Link to={`${config.routes.public.diamondRingList.replace(":ringType", "round-ring")}`}>
                          Round
                        </Link>
                      ),
                    },
                    {key: 'ring-shape-2', label: (
                        <Link to={`${config.routes.public.diamondRingList.replace(":ringType", "princess-ring")}`}>
                          Princess
                        </Link>
                      ),
                    },
                    {key: 'ring-shape-3', label: (
                        <Link to={`${config.routes.public.diamondRingList.replace(":ringType", "cushion-ring")}`}>
                          Cushion
                        </Link>
                      )
                    },
                    {key: 'ring-shape-4', label: (
                        <Link to={`${config.routes.public.diamondRingList.replace(":ringType", "oval-ring")}`}>
                          Oval
                        </Link>
                      )
                    },
                    {key: 'ring-shape-5', label: (
                        <Link to={`${config.routes.public.diamondRingList.replace(":ringType", "emerald-ring")}`}>
                          Emerald
                        </Link>
                      )
                    },
                    {key: 'ring-shape-6', label: (
                        <Link to={`${config.routes.public.diamondRingList.replace(":ringType", "pear-ring")}`}>
                          Pear
                        </Link>
                      )
                    },
                    {key: 'ring-shape-7', label: (
                        <Link to={`${config.routes.public.diamondRingList.replace(":ringType", "asscher-ring")}`}>
                          Asscher
                        </Link>
                      )
                    },
                    {key: 'ring-shape-8', label: (
                        <Link to={`${config.routes.public.diamondRingList.replace(":ringType", "heart-ring")}`}>
                          Heart
                        </Link>
                      )},
                    {key: 'ring-shape-9', label: (
                        <Link to={`${config.routes.public.diamondRingList.replace(":ringType", "radiant-ring")}`}>
                          Radiant
                        </Link>
                      )},
                    {key: 'ring-shape-10', label: (
                        <Link to={`${config.routes.public.diamondRingList.replace(":ringType", "marquise-ring")}`}>
                          Marquise
                        </Link>
                      )},
                ]
            },
            {
                key: 'ring-designer',
                label: 'Designer Ring',
                type: 'group',
                children: [
                    {key: 'ring-designer-1', label: (
                        <Link to={`${config.routes.public.designerList.replace(":designer", "zaczacposen")}`}>
                          Zac Zac Posen
                        </Link>
                      )},
                    {key: 'ring-designer-2', label: (
                        <Link to={`${config.routes.public.designerList.replace(":designer", "bellavaughan")}`}>
                         Bella Vaughan
                        </Link>
                      )},
                    {key: 'ring-designer-3', label: (
                        <Link to={`${config.routes.public.designerList.replace(":designer", "bluenile")}`}>
                         Blue Nile Studio
                        </Link>
                      )},
                    {key: 'ring-designer-4', label: (
                        <Link to={`${config.routes.public.designerList.replace(":designer", "thegallerycollection")}`}>
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
                    {key: 'learn-1', label: (
                        <Link to={config.routes.public.size} underline zoom scroll>
                            Find Your Ring Size
                        </Link>
                    )},
                    {key: 'learn-2',  label: (
                        <Link to={config.routes.public.cs} underline zoom scroll>
                            Learn About the 4Cs
                        </Link>
                    )},
                    {key: 'learn-3', label: (
                        <Link to={config.routes.public.buying} underline zoom scroll>
                            Buying Guide
                        </Link>
                    )},
                    {key: 'learn-4', label: (
                        <Link to={config.routes.public.metalEdu} underline zoom scroll>
                            Metal Education
                        </Link>
                    )},
                ]
            }
        ]
    },
    {
        key: 'engagement-ring',
        label:  (
            <Link to={config.routes.public.allEngagement} underline zoom scroll>
               Engagement Ring
            </Link>
        ),
        children: [
            {
                key: 'engagement-ring-shape',
                label: 'Ring by Shape',
                type: 'group',
                children: [
                    {key: 'engagement-ring-1', label: (
                        <Link to={`${config.routes.public.engagementShape.replace(":ringShape", "round-engagement-ring")}`}>
                          Round
                        </Link>
                      )},
                    {key: 'engagement-ring-2', label: (
                        <Link to={`${config.routes.public.engagementShape.replace(":ringShape", "princess-engagement-ring")}`}>
                         Princess
                        </Link>
                      )},
                    {key: 'engagement-ring-3', label: (
                        <Link to={`${config.routes.public.engagementShape.replace(":ringShape", "cushion-engagement-ring")}`}>
                          Cushion
                        </Link>
                      )},
                    {key: 'engagement-ring-4', label: (
                        <Link to={`${config.routes.public.engagementShape.replace(":ringShape", "oval-engagement-ring")}`}>
                          Oval
                        </Link>
                      )},
                    {key: 'engagement-ring-5', label: (
                        <Link to={`${config.routes.public.engagementShape.replace(":ringShape", "emerald-engagement-ring")}`}>
                          Emerald
                        </Link>
                      )},
                    {key: 'engagement-ring-6', label: (
                        <Link to={`${config.routes.public.engagementShape.replace(":ringShape", "pear-engagement-ring")}`}>
                          Pear
                        </Link>
                      )},
                    {key: 'engagement-ring-7', label: (
                        <Link to={`${config.routes.public.engagementShape.replace(":ringShape", "asscher-engagement-ring")}`}>
                         Asscher
                        </Link>
                      )},
                    {key: 'engagement-ring-8', label: (
                        <Link to={`${config.routes.public.engagementShape.replace(":ringShape", "heart-engagement-ring")}`}>
                         Heart
                        </Link>
                      )},
                    {key: 'engagement-ring-9', label: (
                        <Link to={`${config.routes.public.engagementShape.replace(":ringShape", "radiant-engagement-ring")}`}>
                          Radiant
                        </Link>
                      )},
                    {key: 'engagement-ring-10', label: (
                        <Link to={`${config.routes.public.engagementShape.replace(":ringShape", "marquise-engagement-ring")}`}>
                          Marquise
                        </Link>
                      )},
                ]
            },
            {
                key: 'engagement-ring-metal',
                label: "Men's Ring",
                type: 'group',
                children: [
                    {key: 'engagement-ring-metal-1', label: (
                        <Link to={`${config.routes.public.menEngagement.replace(":ringMetal", "white-gold")}`}>
                         White Gold
                        </Link>
                      )},
                    {key: 'engagement-ring-metal-2', label: (
                        <Link to={`${config.routes.public.menEngagement.replace(":ringMetal", "yellow-gold")}`}>
                         Yellow Gold
                        </Link>
                      )},
                    {key: 'engagement-ring-metal-3', label: (
                        <Link to={`${config.routes.public.menEngagement.replace(":ringMetal", "rose-gold")}`}>
                         Rose Gold
                        </Link>
                      )},
                    {key: 'engagement-ring-metal-4', label: (
                        <Link to={`${config.routes.public.menEngagement.replace(":ringMetal", "platinum")}`}>
                          Platinum
                        </Link>
                      )},
                ]
            },
            {
                key: 'ring-designer',
                label: 'Designer Ring',
                type: 'group',
                children: [
                    {key: 'engagement-ring-designer-1', label: (
                        <Link to={`${config.routes.public.engagementDesigner.replace(":designer", "zaczacposen")}`}>
                          Zac Zac Posen
                        </Link>
                      )},
                    {key: 'engagement-ring-designer-2', label: (
                        <Link to={`${config.routes.public.engagementDesigner.replace(":designer", "bellavaughan")}`}>
                         Bella Vaughan
                        </Link>
                      )},
                    {key: 'engagement-ring-designer-3', label: (
                        <Link to={`${config.routes.public.engagementDesigner.replace(":designer", "bluenile")}`}>
                         Blue Nile Studio
                        </Link>
                      )},
                    {key: 'engagement-ring-designer-4', label: (
                        <Link to={`${config.routes.public.engagementDesigner.replace(":designer", "thegallerycollection")}`}>
                         The Gallery Collection
                        </Link>
                      )},
                ]
            },
            {
                key: 'learn-about-engagement-ring',
                label: 'Learn About',
                type: 'group',
                children: [
                    {key: 'learn-engagement-ring-1', label: (
                        <Link to={config.routes.public.size} underline zoom scroll>
                            Find Your Ring Size
                        </Link>
                    )},
                    {key: 'learn-engagement-ring-2',  label: (
                        <Link to={config.routes.public.cs} underline zoom scroll>
                            Learn About the 4Cs
                        </Link>
                    )},
                    {key: 'learn-engagement-ring-3', label: (
                        <Link to={config.routes.public.buying} underline zoom scroll>
                            Buying Guide
                        </Link>
                    )},
                    {key: 'learn-engagement-ring-4', label: (
                        <Link to={config.routes.public.metalEdu} underline zoom scroll>
                            Metal Education
                        </Link>
                    )},
                    {key: 'learn-engagement-ring-5', label:(
                        <Link to={`${config.routes.public.gift.replace(":jewelryType", "top-ten-engagement-ring")}`} underline zoom scroll>
                           Top 10 Engagement Rings
                        </Link>
                    )},
                ]
            }
        ]
    },
    {
        key: 'wedding-ring',
        label:  (
            <Link to={config.routes.public.allWedding} underline zoom scroll>
               Wedding Ring
            </Link>
        ),
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
                label: "Men's Rings",
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
                    {key: 'learn-wedding-ring-1', label: (
                        <Link to={config.routes.public.size} underline zoom scroll>
                            Find Your Ring Size
                        </Link>
                    )},
                    {key: 'learn-wedding-ring-2',  label: (
                        <Link to={config.routes.public.cs} underline zoom scroll>
                            Learn About the 4Cs
                        </Link>
                    )},
                    {key: 'learn-wedding-ring-3', label: (
                        <Link to={config.routes.public.buying} underline zoom scroll>
                            Buying Guide
                        </Link>
                    )},
                    {key: 'learn-wedding-ring-4', label: (
                        <Link to={config.routes.public.metalEdu} underline zoom scroll>
                            Metal Education
                        </Link>
                    )},
                    {key: 'learn-wedding-ring-5', label: 'Top 10 Engagement Rings'},
                ]
            }
        ]
    },
    {
        key: 'jewelry',
        label: (
            <Link to={config.routes.public.allProduct} underline zoom scroll>
                Jewelry
            </Link>
        ),
        children: [
            {
                key: 'jewelry-type',
                label: 'Jewelry Classification',
                type: 'group',
                children: [
                    {key: 'jewelry-type-1', label: (
                        <Link to={`${config.routes.public.jewelryList.replace(":jewelryType", "ring")}`}>
                         Rings
                        </Link>
                      )
                    },
                    {key: 'jewelry-type-2', label: (
                        <Link to={`${config.routes.public.jewelryList.replace(":jewelryType", "necklace")}`}>
                         Necklaces
                        </Link>
                      )},
                    {key: 'jewelry-type-3', label: (
                        <Link to={`${config.routes.public.jewelryList.replace(":jewelryType", "earrings")}`}>
                         Earrings
                        </Link>
                      )},
                    {key: 'jewelry-type-4', label: (
                        <Link to={`${config.routes.public.jewelryList.replace(":jewelryType", "bracelet")}`}>
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
                key: 'jewelry-firm',
                label: 'Jewelry Firm',
                type: 'group',
                children: [
                    {key: 'jewelry-firm-1',  label: (
                        <Link to={`${config.routes.public.firmList.replace(":jewelryFirm", "VanCleef&Arpels")}`}>
                        Van Cleef & Arpels
                        </Link>
                      )
                    },
                    {key: 'jewelry-firm-2',  label: (
                        <Link to={`${config.routes.public.firmList.replace(":jewelryFirm", "HarryWinston")}`}>
                         Harry Winston
                        </Link>
                      )},
                    {key: 'jewelry-firm-3',  label: (
                        <Link to={`${config.routes.public.firmList.replace(":jewelryFirm", "Cartier")}`}>
                        Cartier
                        </Link>
                      )},
                    {key: 'jewelry-firm-4',  label: (
                        <Link to={`${config.routes.public.firmList.replace(":jewelryFirm", "Tiffany&Co")}`}>
                         Tiffany & Co
                        </Link>
                      )},
                    {key: 'jewelry-firm-5',  label: (
                        <Link to={`${config.routes.public.firmList.replace(":jewelryFirm", "Bvlgari")}`}>
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
                    {key: 'learn-jewelry-1', label: (
                        <Link to={config.routes.public.buying} underline zoom scroll>
                            Buying Guide
                        </Link>
                    )},
                    {key: 'learn-jewelry-2', label: (
                        <Link to={config.routes.public.cs} underline zoom scroll>
                            Learn About the 4Cs
                        </Link>
                    )},
                    {key: 'learn-jewelry-3', label: (
                        <Link to={config.routes.public.size} underline zoom scroll>
                            Find your ring size
                        </Link>
                    )},
                    {key: 'learn-jewelry-4', label: (
                        <Link to={config.routes.public.necklaceEdu} underline zoom scroll>
                            Necklace Education
                        </Link>
                    )},
                    {key: 'learn-jewelry-5', label: (
                        <Link to={config.routes.public.braceletEdu} underline zoom scroll>
                            Bracelet Education
                        </Link>
                    )},
                    {key: 'learn-jewelry-6', label: (
                        <Link to={config.routes.public.earringEdu} underline zoom scroll>
                           Earrings Education
                        </Link>
                    )},
                   
                ]
            }
        ]
    },
    {
        key: 'gift',
        label:"Gift",
        children: [
            {
                key: 'jewelry-type',
                label: 'Jewelry Classification',
                type: 'group',
                children: [
                    {key: 'gift-jewelry-type-1', label: (
                        <Link to={`${config.routes.public.gift.replace(":jewelryType", "top-ten-ring")}`}>
                         Rings
                        </Link>
                      )},
                    {key: 'gift-jewelry-type-2', label: (
                        <Link to={`${config.routes.public.gift.replace(":jewelryType", "top-ten-necklace")}`}>
                         Necklaces
                        </Link>
                      )},
                    {key: 'gift-jewelry-type-3', label: (
                        <Link to={`${config.routes.public.gift.replace(":jewelryType", "top-ten-earrings")}`}>
                         Earrings
                        </Link>
                      )},
                    {key: 'gift-jewelry-type-4', label: (
                        <Link to={`${config.routes.public.gift.replace(":jewelryType", "top-ten-bracelet")}`}>
                         Bracelet
                        </Link>
                      )},
                    {key: 'gift-jewelry-type-5', label: 'Anklets'},
                    {key: 'gift-jewelry-type-6', label: 'Bangles'},
                    {key: 'gift-jewelry-type-7', label: 'Chokers'},
                    {key: 'gift-jewelry-type-8', label: 'Pendants'},
                ]
            },
            {
                key: 'gift-ring',
                label: 'Gifts By Occasion',
                type: 'group',
                children: [
                    {key: 'gift-ring-1', label: (
                        <Link to={`${config.routes.public.gift.replace(":jewelryType", "top-ten-engagement-ring")}`} underline zoom scroll>
                           Engagement Rings
                        </Link>
                    )},
                    {key: 'gift-ring-2', label: 'Wedding Ring'},
                ]
            },
            {
                key: 'gift-jewelry-firm',
                label: 'Jewelry Firm',
                type: 'group',
                children: [
                    {key: 'jewelry-firm-1',  label: (
                        <Link to={`${config.routes.public. giftFirm.replace(":jewelryFirm", "top-ten-vancleef&arpels")}`}>
                        Van Cleef & Arpels
                        </Link>
                      )
                    },
                    {key: 'jewelry-firm-2',  label: (
                        <Link to={`${config.routes.public. giftFirm.replace(":jewelryFirm", "top-ten-harrywinston")}`}>
                         Harry Winston
                        </Link>
                      )},
                    {key: 'jewelry-firm-3',  label: (
                        <Link to={`${config.routes.public. giftFirm.replace(":jewelryFirm", "top-ten-cartier")}`}>
                        Cartier
                        </Link>
                      )},
                    {key: 'jewelry-firm-4',  label: (
                        <Link to={`${config.routes.public. giftFirm.replace(":jewelryFirm", "top-ten-tiffany&co")}`}>
                         Tiffany & Co
                        </Link>
                      )},
                    {key: 'jewelry-firm-5',  label: (
                        <Link to={`${config.routes.public. giftFirm.replace(":jewelryFirm", "top-ten-bvlgari")}`}>
                        Bvlgari
                        </Link>
                      )},
                ]
            },
            {
                key: 'learn-about-gift',
                label: 'Learn About',
                type: 'group',
                children: [
                    {key: 'learn-jewelry-1', label: (
                        <Link to={config.routes.public.buying} underline zoom scroll>
                            Buying Guide
                        </Link>
                    )},
                    {key: 'learn-jewelry-2', label: (
                        <Link to={config.routes.public.cs} underline zoom scroll>
                            Learn About the 4Cs
                        </Link>
                    )},
                    {key: 'learn-jewelry-3', label: (
                        <Link to={config.routes.public.size} underline zoom scroll>
                            Find your ring size
                        </Link>
                    )},
                    {key: 'learn-jewelry-4', label: (
                        <Link to={config.routes.public.necklaceEdu} underline zoom scroll>
                            Necklace Education
                        </Link>
                    )},
                    {key: 'learn-jewelry-5', label: (
                        <Link to={config.routes.public.braceletEdu} underline zoom scroll>
                            Bracelet Education
                        </Link>
                    )},
                    {key: 'learn-jewelry-6', label: (
                        <Link to={config.routes.public.earringEdu} underline zoom scroll>
                           Earrings Education
                        </Link>
                    )},
                   
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