export interface ProductVariant {
    id: string;
    variantName: string; // e.g., "With Headrest", "Without Headrest"
    galleryImages: string[]; // Exactly 7 images for the split layout
    threeDModelUrl?: string; // Optional path to a .gltf or .glb file
}

export interface ProductInfo {
    overview: string;
    features: string[];
    dimensions: string;
    materials: string[];
}

export interface Product {
    id: string;
    name: string;
    description: string;
    flagshipImage: string;
    sceneImages: string[];
    variants: ProductVariant[];
    detailedInfo: ProductInfo;
}

export interface Series {
    id: string;
    name: string;
    description: string;
    products: Product[];
}

export interface Category {
    id: string;
    name: string;
    description: string;
    series: Series[];
}

export const afcCatalog: Category[] = [
                {
        "id": "seating",
        "name": "Ergonomic & Executive Seating",
        "description": "Discover our comprehensive range of seating solutions categorized by Premium Mesh, Executive Leather, Soft Fabric Lounges, and Multipurpose Visitor seating.",
        "series": [
            {
                "id": "mesh-seating",
                "name": "Mesh Series",
                "description": "Breathable, high-performance ergonomic mesh chairs for long-duration tasks.",
                "products": [
                    {
                        "id": "fluid-x",
                        "name": "Fluid X Series",
                        "description": "Experience premium ergonomic design with the Fluid X Series.",
                        "flagshipImage": "/images/products/fluid-x-chair-1.webp",
                        "sceneImages": [
                            "/images/products/fluid-x-chair-1.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Fluid X Series Standard",
                                "galleryImages": [
                                    "/images/products/fluid-x-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/fluid-x-chair-3.webp",
                                    "/images/products/fluid-x-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/fluid-x-chair-3.webp",
                                    "/images/products/fluid-x-chair-1.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Fluid X Series Executive",
                                "galleryImages": [
                                    "/images/products/fluid-x-chair-3.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/fluid-x-chair-1.webp",
                                    "/images/products/fluid-x-chair-3.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/fluid-x-chair-1.webp",
                                    "/images/products/fluid-x-chair-3.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Fluid X Series provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    },
                    {
                        "id": "spino",
                        "name": "Spino Task",
                        "description": "Experience premium ergonomic design with the Spino Task.",
                        "flagshipImage": "/images/products/spino-chair-1.webp",
                        "sceneImages": [
                            "/images/products/spino-chair-1.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Spino Task Standard",
                                "galleryImages": [
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/spino-chair-2.webp",
                                    "/images/products/spino-chair-3.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/spino-chair-2.webp",
                                    "/images/products/spino-chair-3.webp",
                                    "/images/products/spino-chair-1.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Spino Task Executive",
                                "galleryImages": [
                                    "/images/products/spino-chair-3.webp",
                                    "/images/products/spino-chair-2.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/spino-chair-3.webp",
                                    "/images/products/spino-chair-2.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/spino-chair-3.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Spino Task provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    },
                    {
                        "id": "myel",
                        "name": "Myel Ergonomic",
                        "description": "Experience premium ergonomic design with the Myel Ergonomic.",
                        "flagshipImage": "/images/products/myel-chair-1.webp",
                        "sceneImages": [
                            "/images/products/myel-chair-1.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Myel Ergonomic Standard",
                                "galleryImages": [
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-1.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Myel Ergonomic Executive",
                                "galleryImages": [
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-3.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Myel Ergonomic provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    },
                    {
                        "id": "xmesh",
                        "name": "X-Mesh Pro",
                        "description": "Experience premium ergonomic design with the X-Mesh Pro.",
                        "flagshipImage": "/images/products/fluid-chair-1.webp",
                        "sceneImages": [
                            "/images/products/fluid-chair-1.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "X-Mesh Pro Standard",
                                "galleryImages": [
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/solace-chair-3.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "X-Mesh Pro Executive",
                                "galleryImages": [
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-1.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The X-Mesh Pro provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    },
                    {
                        "id": "revoq",
                        "name": "Revoq Series",
                        "description": "Experience premium ergonomic design with the Revoq Series.",
                        "flagshipImage": "/images/products/spino-chair-2.webp",
                        "sceneImages": [
                            "/images/products/spino-chair-2.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Revoq Series Standard",
                                "galleryImages": [
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/solace-chair-3.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Revoq Series Executive",
                                "galleryImages": [
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-1.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Revoq Series provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    },
                    {
                        "id": "logica",
                        "name": "Logica Task",
                        "description": "Experience premium ergonomic design with the Logica Task.",
                        "flagshipImage": "/images/products/chair-mesh-office.webp",
                        "sceneImages": [
                            "/images/products/chair-mesh-office.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Logica Task Standard",
                                "galleryImages": [
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/solace-chair-3.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Logica Task Executive",
                                "galleryImages": [
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-1.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Logica Task provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    },
                    {
                        "id": "sullion",
                        "name": "Sullion Executive",
                        "description": "Experience premium ergonomic design with the Sullion Executive.",
                        "flagshipImage": "/images/products/classy-chair-2.webp",
                        "sceneImages": [
                            "/images/products/classy-chair-2.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Sullion Executive Standard",
                                "galleryImages": [
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/solace-chair-3.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Sullion Executive Executive",
                                "galleryImages": [
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-1.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Sullion Executive provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    },
                    {
                        "id": "nuvic",
                        "name": "Nuvic Ergo",
                        "description": "Experience premium ergonomic design with the Nuvic Ergo.",
                        "flagshipImage": "/images/products/chair-fluid-main.webp",
                        "sceneImages": [
                            "/images/products/chair-fluid-main.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Nuvic Ergo Standard",
                                "galleryImages": [
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/solace-chair-3.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Nuvic Ergo Executive",
                                "galleryImages": [
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-1.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Nuvic Ergo provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    },
                    {
                        "id": "rock",
                        "name": "Rock Solid",
                        "description": "Experience premium ergonomic design with the Rock Solid.",
                        "flagshipImage": "/images/products/seating-fluid-1.webp",
                        "sceneImages": [
                            "/images/products/seating-fluid-1.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Rock Solid Standard",
                                "galleryImages": [
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/solace-chair-3.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Rock Solid Executive",
                                "galleryImages": [
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-1.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Rock Solid provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    },
                    {
                        "id": "breeze",
                        "name": "Breez Air",
                        "description": "Experience premium ergonomic design with the Breez Air.",
                        "flagshipImage": "/images/products/spino-chair-3.webp",
                        "sceneImages": [
                            "/images/products/spino-chair-3.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Breez Air Standard",
                                "galleryImages": [
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/solace-chair-3.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Breez Air Executive",
                                "galleryImages": [
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-1.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Breez Air provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    },
                    {
                        "id": "orbit",
                        "name": "Orbit 360",
                        "description": "Experience premium ergonomic design with the Orbit 360.",
                        "flagshipImage": "/images/products/myel-chair-2.webp",
                        "sceneImages": [
                            "/images/products/myel-chair-2.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Orbit 360 Standard",
                                "galleryImages": [
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/solace-chair-3.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Orbit 360 Executive",
                                "galleryImages": [
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-1.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Orbit 360 provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    },
                    {
                        "id": "toro",
                        "name": "Toro Heavy Duty",
                        "description": "Experience premium ergonomic design with the Toro Heavy Duty.",
                        "flagshipImage": "/images/products/fluid-x-chair-3.webp",
                        "sceneImages": [
                            "/images/products/fluid-x-chair-3.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Toro Heavy Duty Standard",
                                "galleryImages": [
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/solace-chair-3.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Toro Heavy Duty Executive",
                                "galleryImages": [
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-1.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Toro Heavy Duty provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    }
                ]
            },
            {
                "id": "leather-seating",
                "name": "Premium Leather Series",
                "description": "Top-tier leather executive and director chairs offering unparalleled luxury and authority.",
                "products": [
                    {
                        "id": "classy",
                        "name": "Classy Executive",
                        "description": "Experience premium ergonomic design with the Classy Executive.",
                        "flagshipImage": "/images/products/classy-chair-1.webp",
                        "sceneImages": [
                            "/images/products/classy-chair-1.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Classy Executive Standard",
                                "galleryImages": [
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/classy-chair-2.webp",
                                    "/images/products/classy-chair-3.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/classy-chair-2.webp",
                                    "/images/products/classy-chair-3.webp",
                                    "/images/products/classy-chair-1.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Classy Executive Executive",
                                "galleryImages": [
                                    "/images/products/classy-chair-3.webp",
                                    "/images/products/classy-chair-2.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/classy-chair-3.webp",
                                    "/images/products/classy-chair-2.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/classy-chair-3.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Classy Executive provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    },
                    {
                        "id": "phoenix",
                        "name": "Phoenix Director",
                        "description": "Experience premium ergonomic design with the Phoenix Director.",
                        "flagshipImage": "/images/products/classy-chair-3.webp",
                        "sceneImages": [
                            "/images/products/classy-chair-3.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Phoenix Director Standard",
                                "galleryImages": [
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/solace-chair-3.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Phoenix Director Executive",
                                "galleryImages": [
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-1.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Phoenix Director provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    }
                ]
            },
            {
                "id": "fabric-seating",
                "name": "Soft Seating & Lounge",
                "description": "Comfortable, highly durable fabric chairs perfect for varied workstation and collaborative environments.",
                "products": [
                    {
                        "id": "solace",
                        "name": "Solace Lounge Chair",
                        "description": "Experience premium ergonomic design with the Solace Lounge Chair.",
                        "flagshipImage": "/images/products/solace-chair-1.webp",
                        "sceneImages": [
                            "/images/products/solace-chair-1.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Solace Lounge Chair Standard",
                                "galleryImages": [
                                    "/images/products/solace-chair-1.webp",
                                    "/images/products/solace-chair-2.webp",
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/solace-chair-1.webp",
                                    "/images/products/solace-chair-2.webp",
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/solace-chair-1.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Solace Lounge Chair Executive",
                                "galleryImages": [
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/solace-chair-2.webp",
                                    "/images/products/solace-chair-1.webp",
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/solace-chair-2.webp",
                                    "/images/products/solace-chair-1.webp",
                                    "/images/products/solace-chair-3.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Solace Lounge Chair provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    },
                    {
                        "id": "sway",
                        "name": "Sway Activity",
                        "description": "Experience premium ergonomic design with the Sway Activity.",
                        "flagshipImage": "/images/products/solace-chair-2.webp",
                        "sceneImages": [
                            "/images/products/solace-chair-2.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Sway Activity Standard",
                                "galleryImages": [
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/solace-chair-3.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Sway Activity Executive",
                                "galleryImages": [
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-1.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Sway Activity provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    },
                    {
                        "id": "omnia",
                        "name": "Omnia Lounge",
                        "description": "Experience premium ergonomic design with the Omnia Lounge.",
                        "flagshipImage": "/images/products/solace-chair-3.webp",
                        "sceneImages": [
                            "/images/products/solace-chair-3.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Omnia Lounge Standard",
                                "galleryImages": [
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/solace-chair-3.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Omnia Lounge Executive",
                                "galleryImages": [
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-1.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Omnia Lounge provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    },
                    {
                        "id": "mozio",
                        "name": "Mozio Pod",
                        "description": "Experience premium ergonomic design with the Mozio Pod.",
                        "flagshipImage": "/images/products/softseating-solace-1.webp",
                        "sceneImages": [
                            "/images/products/softseating-solace-1.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Mozio Pod Standard",
                                "galleryImages": [
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/solace-chair-3.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Mozio Pod Executive",
                                "galleryImages": [
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-1.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Mozio Pod provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    },
                    {
                        "id": "zino",
                        "name": "Zino Soft",
                        "description": "Experience premium ergonomic design with the Zino Soft.",
                        "flagshipImage": "/images/products/softseating-solace-2.webp",
                        "sceneImages": [
                            "/images/products/softseating-solace-2.webp"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Zino Soft Standard",
                                "galleryImages": [
                                    "/images/products/myel-chair-1.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/solace-chair-3.webp"
                                ]
                            },
                            {
                                "id": "with-headrest",
                                "variantName": "Zino Soft Executive",
                                "galleryImages": [
                                    "/images/products/solace-chair-3.webp",
                                    "/images/products/classy-chair-1.webp",
                                    "/images/products/fluid-x-chair-2.webp",
                                    "/images/products/spino-chair-1.webp",
                                    "/images/products/myel-chair-3.webp",
                                    "/images/products/myel-chair-2.webp",
                                    "/images/products/myel-chair-1.webp"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "The Zino Soft provides advanced kinematic performance and superior airflow, custom-tuned for modern professionals.",
                            "features": [
                                "Dynamic spinal support mechanism",
                                "Advanced ergonomic contouring",
                                "Weight-activated tilt tension",
                                "Premium material construction"
                            ],
                            "dimensions": "Overall Height: 40\" - 45\" | Width: 26\" | Seat Depth: 17\"",
                            "materials": [
                                "High-density molded foam",
                                "BIFMA-certified pneumatic cylinder",
                                "Glass-filled polymer frame"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": "soft-seating",
        "name": "Soft seating",
        "description": "Discover premium soft seating designed to elevate breakout, lounge, and collaborative spaces with comfort and style. Featuring sofas, pouffes, and collaborative seats, these solutions enhance well-being, support informal interactions, and boost workplace experience.",
        "series": [
            {
                "id": "lounge",
                "name": "Soft Seating",
                "description": "The Soft Seating series from our Soft seating collection.",
                "products": [
                    {
                        "id": "accent",
                        "name": "Accent",
                        "description": "The Accent is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a5ea38ec73bfdd3dd9dd66_ACCENT%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a5ea38ec73bfdd3dd9dd66_ACCENT%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a5ea38ec73bfdd3dd9dd66_ACCENT%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a5ea38ec73bfdd3dd9dd66_ACCENT%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a5ea38ec73bfdd3dd9dd66_ACCENT%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a5ea38ec73bfdd3dd9dd66_ACCENT%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a5ea38ec73bfdd3dd9dd66_ACCENT%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Accent. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "solace",
                        "name": "Solace",
                        "description": "The Solace is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6aaf258123449245693e_image%201233%20(3).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6aaf258123449245693e_image%201233%20(3).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6aaf258123449245693e_image%201233%20(3).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6aaf258123449245693e_image%201233%20(3).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6aaf258123449245693e_image%201233%20(3).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6aaf258123449245693e_image%201233%20(3).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6aaf258123449245693e_image%201233%20(3).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Solace. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "crossa",
                        "name": "Crossa",
                        "description": "The Crossa is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6af96371fec7a5c38bd3_image%201233%20(4).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6af96371fec7a5c38bd3_image%201233%20(4).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6af96371fec7a5c38bd3_image%201233%20(4).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6af96371fec7a5c38bd3_image%201233%20(4).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6af96371fec7a5c38bd3_image%201233%20(4).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6af96371fec7a5c38bd3_image%201233%20(4).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6af96371fec7a5c38bd3_image%201233%20(4).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Crossa. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "arco",
                        "name": "Arco",
                        "description": "The Arco is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6a71b7a819f0c9674bce_image%201233%20(2).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6a71b7a819f0c9674bce_image%201233%20(2).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6a71b7a819f0c9674bce_image%201233%20(2).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6a71b7a819f0c9674bce_image%201233%20(2).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6a71b7a819f0c9674bce_image%201233%20(2).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6a71b7a819f0c9674bce_image%201233%20(2).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6a71b7a819f0c9674bce_image%201233%20(2).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Arco. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "rattique",
                        "name": "Rattique",
                        "description": "The Rattique is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3390bd09d0a8c4562b8a7_RATTIQUE.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3390bd09d0a8c4562b8a7_RATTIQUE.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3390bd09d0a8c4562b8a7_RATTIQUE.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3390bd09d0a8c4562b8a7_RATTIQUE.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3390bd09d0a8c4562b8a7_RATTIQUE.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3390bd09d0a8c4562b8a7_RATTIQUE.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3390bd09d0a8c4562b8a7_RATTIQUE.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Rattique. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "ceda",
                        "name": "Ceda",
                        "description": "The Ceda is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a338c5fb60ecbb422ee1b9_CEDA%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a338c5fb60ecbb422ee1b9_CEDA%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a338c5fb60ecbb422ee1b9_CEDA%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a338c5fb60ecbb422ee1b9_CEDA%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a338c5fb60ecbb422ee1b9_CEDA%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a338c5fb60ecbb422ee1b9_CEDA%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a338c5fb60ecbb422ee1b9_CEDA%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Ceda. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "eclips",
                        "name": "Eclips",
                        "description": "The Eclips is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6ba294db46d90aab42f5_image%201233%20(7).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6ba294db46d90aab42f5_image%201233%20(7).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6ba294db46d90aab42f5_image%201233%20(7).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6ba294db46d90aab42f5_image%201233%20(7).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6ba294db46d90aab42f5_image%201233%20(7).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6ba294db46d90aab42f5_image%201233%20(7).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6ba294db46d90aab42f5_image%201233%20(7).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Eclips. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "margas",
                        "name": "Margas",
                        "description": "The Margas is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e86002058ae688a80457_MARGAS%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e86002058ae688a80457_MARGAS%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e86002058ae688a80457_MARGAS%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e86002058ae688a80457_MARGAS%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e86002058ae688a80457_MARGAS%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e86002058ae688a80457_MARGAS%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e86002058ae688a80457_MARGAS%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Margas. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "embrace",
                        "name": "Embrace",
                        "description": "The Embrace is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e94769d0d522d9385978_EMBRACE%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e94769d0d522d9385978_EMBRACE%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e94769d0d522d9385978_EMBRACE%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e94769d0d522d9385978_EMBRACE%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e94769d0d522d9385978_EMBRACE%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e94769d0d522d9385978_EMBRACE%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e94769d0d522d9385978_EMBRACE%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Embrace. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "halo",
                        "name": "Halo",
                        "description": "The Halo is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6c4359f55f1a8b525b0f_image%201233%20(10).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6c4359f55f1a8b525b0f_image%201233%20(10).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6c4359f55f1a8b525b0f_image%201233%20(10).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6c4359f55f1a8b525b0f_image%201233%20(10).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6c4359f55f1a8b525b0f_image%201233%20(10).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6c4359f55f1a8b525b0f_image%201233%20(10).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6c4359f55f1a8b525b0f_image%201233%20(10).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Halo. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "relax",
                        "name": "Relax",
                        "description": "The Relax is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6b7264f92d8d692a5e22_image%201233%20(5).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6b7264f92d8d692a5e22_image%201233%20(5).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6b7264f92d8d692a5e22_image%201233%20(5).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6b7264f92d8d692a5e22_image%201233%20(5).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6b7264f92d8d692a5e22_image%201233%20(5).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6b7264f92d8d692a5e22_image%201233%20(5).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6b7264f92d8d692a5e22_image%201233%20(5).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Relax. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "arcana",
                        "name": "Arcana",
                        "description": "The Arcana is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/693c1b3af0240e1beec0358e_ARCANA%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/693c1b3af0240e1beec0358e_ARCANA%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/693c1b3af0240e1beec0358e_ARCANA%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/693c1b3af0240e1beec0358e_ARCANA%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/693c1b3af0240e1beec0358e_ARCANA%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/693c1b3af0240e1beec0358e_ARCANA%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/693c1b3af0240e1beec0358e_ARCANA%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Arcana. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "plumb",
                        "name": "Plumb",
                        "description": "The Plumb is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6c0f5fcee8df4047ad9d_image%201233%20(9).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6c0f5fcee8df4047ad9d_image%201233%20(9).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6c0f5fcee8df4047ad9d_image%201233%20(9).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6c0f5fcee8df4047ad9d_image%201233%20(9).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6c0f5fcee8df4047ad9d_image%201233%20(9).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6c0f5fcee8df4047ad9d_image%201233%20(9).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6c0f5fcee8df4047ad9d_image%201233%20(9).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Plumb. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "casca",
                        "name": "Casca",
                        "description": "The Casca is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a323a76329fcb94777134e_image%201234%20(1).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a323a76329fcb94777134e_image%201234%20(1).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a323a76329fcb94777134e_image%201234%20(1).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a323a76329fcb94777134e_image%201234%20(1).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a323a76329fcb94777134e_image%201234%20(1).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a323a76329fcb94777134e_image%201234%20(1).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a323a76329fcb94777134e_image%201234%20(1).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Casca. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "adam",
                        "name": "Adam",
                        "description": "The Adam is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6bd4a3d1376c34c3139b_image%201233%20(8).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6bd4a3d1376c34c3139b_image%201233%20(8).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6bd4a3d1376c34c3139b_image%201233%20(8).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6bd4a3d1376c34c3139b_image%201233%20(8).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6bd4a3d1376c34c3139b_image%201233%20(8).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6bd4a3d1376c34c3139b_image%201233%20(8).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6bd4a3d1376c34c3139b_image%201233%20(8).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Adam. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "cozy",
                        "name": "Cozy",
                        "description": "The Cozy is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a323da360fccbb2c2efcbf_COZY%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a323da360fccbb2c2efcbf_COZY%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a323da360fccbb2c2efcbf_COZY%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a323da360fccbb2c2efcbf_COZY%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a323da360fccbb2c2efcbf_COZY%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a323da360fccbb2c2efcbf_COZY%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a323da360fccbb2c2efcbf_COZY%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Cozy. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "covea",
                        "name": "Covea",
                        "description": "The Covea is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3386513e28ce2ae6524f6_COVEA.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3386513e28ce2ae6524f6_COVEA.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3386513e28ce2ae6524f6_COVEA.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3386513e28ce2ae6524f6_COVEA.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3386513e28ce2ae6524f6_COVEA.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3386513e28ce2ae6524f6_COVEA.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3386513e28ce2ae6524f6_COVEA.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Covea. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    }
                ]
            },
            {
                "id": "sofa",
                "name": "Soft Seating",
                "description": "The Soft Seating series from our Soft seating collection.",
                "products": [
                    {
                        "id": "como",
                        "name": "Como",
                        "description": "The Como is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7631b9fad23bcc77a966_image%201233%20(13).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7631b9fad23bcc77a966_image%201233%20(13).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7631b9fad23bcc77a966_image%201233%20(13).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7631b9fad23bcc77a966_image%201233%20(13).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7631b9fad23bcc77a966_image%201233%20(13).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7631b9fad23bcc77a966_image%201233%20(13).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7631b9fad23bcc77a966_image%201233%20(13).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Como. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "armora",
                        "name": "Armora",
                        "description": "The Armora is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e761e4fb37224dcf5d956_image%201233%20(14).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e761e4fb37224dcf5d956_image%201233%20(14).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e761e4fb37224dcf5d956_image%201233%20(14).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e761e4fb37224dcf5d956_image%201233%20(14).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e761e4fb37224dcf5d956_image%201233%20(14).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e761e4fb37224dcf5d956_image%201233%20(14).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e761e4fb37224dcf5d956_image%201233%20(14).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Armora. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "alonzo",
                        "name": "Alonzo",
                        "description": "The Alonzo is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75eb79371ca9756d15bc_image%201233%20(17).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75eb79371ca9756d15bc_image%201233%20(17).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75eb79371ca9756d15bc_image%201233%20(17).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75eb79371ca9756d15bc_image%201233%20(17).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75eb79371ca9756d15bc_image%201233%20(17).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75eb79371ca9756d15bc_image%201233%20(17).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75eb79371ca9756d15bc_image%201233%20(17).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Alonzo. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "esmor",
                        "name": "Esmor",
                        "description": "The Esmor is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7649006d0cf26c3edcbd_image%201233%20(12).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7649006d0cf26c3edcbd_image%201233%20(12).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7649006d0cf26c3edcbd_image%201233%20(12).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7649006d0cf26c3edcbd_image%201233%20(12).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7649006d0cf26c3edcbd_image%201233%20(12).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7649006d0cf26c3edcbd_image%201233%20(12).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7649006d0cf26c3edcbd_image%201233%20(12).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Esmor. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "velto",
                        "name": "Velto",
                        "description": "The Velto is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e760c2a6c9a45ad1a8f2f_image%201233%20(15).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e760c2a6c9a45ad1a8f2f_image%201233%20(15).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e760c2a6c9a45ad1a8f2f_image%201233%20(15).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e760c2a6c9a45ad1a8f2f_image%201233%20(15).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e760c2a6c9a45ad1a8f2f_image%201233%20(15).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e760c2a6c9a45ad1a8f2f_image%201233%20(15).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e760c2a6c9a45ad1a8f2f_image%201233%20(15).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Velto. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "hush",
                        "name": "Hush",
                        "description": "The Hush is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75fd9b5e15a7c627e145_image%201233%20(16).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75fd9b5e15a7c627e145_image%201233%20(16).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75fd9b5e15a7c627e145_image%201233%20(16).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75fd9b5e15a7c627e145_image%201233%20(16).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75fd9b5e15a7c627e145_image%201233%20(16).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75fd9b5e15a7c627e145_image%201233%20(16).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75fd9b5e15a7c627e145_image%201233%20(16).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Hush. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    }
                ]
            },
            {
                "id": "collaborative",
                "name": "Soft Seating",
                "description": "The Soft Seating series from our Soft seating collection.",
                "products": [
                    {
                        "id": "padora",
                        "name": "Padora",
                        "description": "The Padora is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6da63eef35af7a4dc8f9_image%201233%20(18).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6da63eef35af7a4dc8f9_image%201233%20(18).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6da63eef35af7a4dc8f9_image%201233%20(18).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6da63eef35af7a4dc8f9_image%201233%20(18).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6da63eef35af7a4dc8f9_image%201233%20(18).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6da63eef35af7a4dc8f9_image%201233%20(18).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6da63eef35af7a4dc8f9_image%201233%20(18).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Padora. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "nuvora",
                        "name": "Nuvora",
                        "description": "The Nuvora is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e752236ffe0f7492a82b3_image%201233%20(20).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e752236ffe0f7492a82b3_image%201233%20(20).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e752236ffe0f7492a82b3_image%201233%20(20).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e752236ffe0f7492a82b3_image%201233%20(20).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e752236ffe0f7492a82b3_image%201233%20(20).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e752236ffe0f7492a82b3_image%201233%20(20).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e752236ffe0f7492a82b3_image%201233%20(20).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Nuvora. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "spectrum",
                        "name": "Spectrum",
                        "description": "The Spectrum is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75398fe8b630aa321d38_image%201233%20(19).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75398fe8b630aa321d38_image%201233%20(19).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75398fe8b630aa321d38_image%201233%20(19).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75398fe8b630aa321d38_image%201233%20(19).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75398fe8b630aa321d38_image%201233%20(19).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75398fe8b630aa321d38_image%201233%20(19).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e75398fe8b630aa321d38_image%201233%20(19).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Spectrum. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "cirq",
                        "name": "Cirq",
                        "description": "The Cirq is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e750f6acc0d6905e57e3e_image%201233%20(21).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e750f6acc0d6905e57e3e_image%201233%20(21).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e750f6acc0d6905e57e3e_image%201233%20(21).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e750f6acc0d6905e57e3e_image%201233%20(21).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e750f6acc0d6905e57e3e_image%201233%20(21).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e750f6acc0d6905e57e3e_image%201233%20(21).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e750f6acc0d6905e57e3e_image%201233%20(21).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Cirq. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "cocoon",
                        "name": "Cocoon",
                        "description": "The Cocoon is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7500e7f294fb8967308c_image%201233%20(22).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7500e7f294fb8967308c_image%201233%20(22).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7500e7f294fb8967308c_image%201233%20(22).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7500e7f294fb8967308c_image%201233%20(22).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7500e7f294fb8967308c_image%201233%20(22).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7500e7f294fb8967308c_image%201233%20(22).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7500e7f294fb8967308c_image%201233%20(22).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Cocoon. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "cove",
                        "name": "Cove",
                        "description": "The Cove is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e74ebab2cec5b5fffd590_image%201233%20(23).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e74ebab2cec5b5fffd590_image%201233%20(23).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e74ebab2cec5b5fffd590_image%201233%20(23).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e74ebab2cec5b5fffd590_image%201233%20(23).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e74ebab2cec5b5fffd590_image%201233%20(23).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e74ebab2cec5b5fffd590_image%201233%20(23).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e74ebab2cec5b5fffd590_image%201233%20(23).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Cove. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    }
                ]
            },
            {
                "id": "pouffee",
                "name": "Soft Seating",
                "description": "The Soft Seating series from our Soft seating collection.",
                "products": [
                    {
                        "id": "trion",
                        "name": "Trion",
                        "description": "The Trion is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ec15223f7db62e2ad317_TRION%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ec15223f7db62e2ad317_TRION%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ec15223f7db62e2ad317_TRION%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ec15223f7db62e2ad317_TRION%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ec15223f7db62e2ad317_TRION%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ec15223f7db62e2ad317_TRION%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ec15223f7db62e2ad317_TRION%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Trion. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "opera",
                        "name": "Opera",
                        "description": "The Opera is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6964d62f0e383e991b112928_OPERA%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6964d62f0e383e991b112928_OPERA%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6964d62f0e383e991b112928_OPERA%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6964d62f0e383e991b112928_OPERA%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6964d62f0e383e991b112928_OPERA%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6964d62f0e383e991b112928_OPERA%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6964d62f0e383e991b112928_OPERA%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Opera. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "orb",
                        "name": "Orb",
                        "description": "The Orb is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ebd5cb721ef5a928e880_ORB%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ebd5cb721ef5a928e880_ORB%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ebd5cb721ef5a928e880_ORB%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ebd5cb721ef5a928e880_ORB%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ebd5cb721ef5a928e880_ORB%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ebd5cb721ef5a928e880_ORB%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ebd5cb721ef5a928e880_ORB%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Orb. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "moon",
                        "name": "Moon",
                        "description": "The Moon is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ebe86f444a9d7c2ad8b1_MOON%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ebe86f444a9d7c2ad8b1_MOON%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ebe86f444a9d7c2ad8b1_MOON%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ebe86f444a9d7c2ad8b1_MOON%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ebe86f444a9d7c2ad8b1_MOON%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ebe86f444a9d7c2ad8b1_MOON%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2ebe86f444a9d7c2ad8b1_MOON%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Moon. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "lura",
                        "name": "Lura",
                        "description": "The Lura is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68b8f0cad3714b344fda06cb_LURA%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68b8f0cad3714b344fda06cb_LURA%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68b8f0cad3714b344fda06cb_LURA%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68b8f0cad3714b344fda06cb_LURA%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68b8f0cad3714b344fda06cb_LURA%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68b8f0cad3714b344fda06cb_LURA%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68b8f0cad3714b344fda06cb_LURA%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Lura. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    }
                ]
            },
            {
                "id": "occasional-tables",
                "name": "Soft Seating",
                "description": "The Soft Seating series from our Soft seating collection.",
                "products": [
                    {
                        "id": "nordic",
                        "name": "Nordic",
                        "description": "The Nordic is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e73d88769e8a0da76d894_image%201233%20(29).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e73d88769e8a0da76d894_image%201233%20(29).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e73d88769e8a0da76d894_image%201233%20(29).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e73d88769e8a0da76d894_image%201233%20(29).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e73d88769e8a0da76d894_image%201233%20(29).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e73d88769e8a0da76d894_image%201233%20(29).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e73d88769e8a0da76d894_image%201233%20(29).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Nordic. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "nook",
                        "name": "Nook",
                        "description": "The Nook is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e71158fea5a3609f0a171_image%201233%20(31).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e71158fea5a3609f0a171_image%201233%20(31).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e71158fea5a3609f0a171_image%201233%20(31).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e71158fea5a3609f0a171_image%201233%20(31).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e71158fea5a3609f0a171_image%201233%20(31).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e71158fea5a3609f0a171_image%201233%20(31).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e71158fea5a3609f0a171_image%201233%20(31).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Nook. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "virello",
                        "name": "Virello",
                        "description": "The Virello is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e73b78769e8a0da76cf7c_image%201233%20(32).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e73b78769e8a0da76cf7c_image%201233%20(32).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e73b78769e8a0da76cf7c_image%201233%20(32).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e73b78769e8a0da76cf7c_image%201233%20(32).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e73b78769e8a0da76cf7c_image%201233%20(32).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e73b78769e8a0da76cf7c_image%201233%20(32).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e73b78769e8a0da76cf7c_image%201233%20(32).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Virello. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "tectara",
                        "name": "Tectara",
                        "description": "The Tectara is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7183efc5d56fa2c0da7f_image%201233%20(33).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7183efc5d56fa2c0da7f_image%201233%20(33).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7183efc5d56fa2c0da7f_image%201233%20(33).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7183efc5d56fa2c0da7f_image%201233%20(33).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7183efc5d56fa2c0da7f_image%201233%20(33).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7183efc5d56fa2c0da7f_image%201233%20(33).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7183efc5d56fa2c0da7f_image%201233%20(33).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Tectara. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "cone",
                        "name": "Cone",
                        "description": "The Cone is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e71c1fc61af6d1934ef55_image%201233%20(34).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e71c1fc61af6d1934ef55_image%201233%20(34).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e71c1fc61af6d1934ef55_image%201233%20(34).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e71c1fc61af6d1934ef55_image%201233%20(34).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e71c1fc61af6d1934ef55_image%201233%20(34).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e71c1fc61af6d1934ef55_image%201233%20(34).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e71c1fc61af6d1934ef55_image%201233%20(34).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Cone. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "luxar",
                        "name": "Luxar",
                        "description": "The Luxar is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7357d000174363890981_image%201233%20(35).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7357d000174363890981_image%201233%20(35).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7357d000174363890981_image%201233%20(35).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7357d000174363890981_image%201233%20(35).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7357d000174363890981_image%201233%20(35).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7357d000174363890981_image%201233%20(35).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e7357d000174363890981_image%201233%20(35).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Luxar. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "twig",
                        "name": "Twig",
                        "description": "The Twig is a premium addition to the Soft Seating series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e734816efefb937d6cf5e_image%201233%20(36).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e734816efefb937d6cf5e_image%201233%20(36).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e734816efefb937d6cf5e_image%201233%20(36).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e734816efefb937d6cf5e_image%201233%20(36).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e734816efefb937d6cf5e_image%201233%20(36).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e734816efefb937d6cf5e_image%201233%20(36).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e734816efefb937d6cf5e_image%201233%20(36).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Twig. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": "educational",
        "name": "Educational",
        "description": "Explore purpose-built educational furniture that supports modern learning environments. From classroom desks and library stations to hostel fittings and assembly seating, our solutions enhance comfort, durability, and active engagement in every institution.",
        "series": [
            {
                "id": "classroom",
                "name": "Educational",
                "description": "The Educational series from our Educational collection.",
                "products": [
                    {
                        "id": "performer",
                        "name": "Performer",
                        "description": "The Performer is a premium addition to the Educational series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6b435681dc4d0f30d68_PERFORMER%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6b435681dc4d0f30d68_PERFORMER%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6b435681dc4d0f30d68_PERFORMER%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6b435681dc4d0f30d68_PERFORMER%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6b435681dc4d0f30d68_PERFORMER%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6b435681dc4d0f30d68_PERFORMER%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6b435681dc4d0f30d68_PERFORMER%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Performer. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "xplorer",
                        "name": "Xplorer",
                        "description": "The Xplorer is a premium addition to the Educational series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6cf58cfc8eb3fb3fd6e_XPLORER%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6cf58cfc8eb3fb3fd6e_XPLORER%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6cf58cfc8eb3fb3fd6e_XPLORER%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6cf58cfc8eb3fb3fd6e_XPLORER%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6cf58cfc8eb3fb3fd6e_XPLORER%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6cf58cfc8eb3fb3fd6e_XPLORER%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6cf58cfc8eb3fb3fd6e_XPLORER%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Xplorer. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "academia",
                        "name": "Academia",
                        "description": "The Academia is a premium addition to the Educational series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6fcfa1b9acc09605702_ACADEMIA%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6fcfa1b9acc09605702_ACADEMIA%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6fcfa1b9acc09605702_ACADEMIA%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6fcfa1b9acc09605702_ACADEMIA%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6fcfa1b9acc09605702_ACADEMIA%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6fcfa1b9acc09605702_ACADEMIA%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd6fcfa1b9acc09605702_ACADEMIA%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Academia. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "classcraft",
                        "name": "Classcraft",
                        "description": "The Classcraft is a premium addition to the Educational series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7222a939a0aaf72493e_CLASSCRAFT%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7222a939a0aaf72493e_CLASSCRAFT%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7222a939a0aaf72493e_CLASSCRAFT%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7222a939a0aaf72493e_CLASSCRAFT%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7222a939a0aaf72493e_CLASSCRAFT%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7222a939a0aaf72493e_CLASSCRAFT%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7222a939a0aaf72493e_CLASSCRAFT%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Classcraft. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "learnix",
                        "name": "Learnix",
                        "description": "The Learnix is a premium addition to the Educational series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd73b2c3fb2237461c32f_LEARNIX%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd73b2c3fb2237461c32f_LEARNIX%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd73b2c3fb2237461c32f_LEARNIX%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd73b2c3fb2237461c32f_LEARNIX%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd73b2c3fb2237461c32f_LEARNIX%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd73b2c3fb2237461c32f_LEARNIX%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd73b2c3fb2237461c32f_LEARNIX%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Learnix. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    }
                ]
            },
            {
                "id": "library",
                "name": "Educational",
                "description": "The Educational series from our Educational collection.",
                "products": [
                    {
                        "id": "connecta",
                        "name": "Connecta",
                        "description": "The Connecta is a premium addition to the Educational series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd76577eebe89b324e4dd_CONNECTA%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd76577eebe89b324e4dd_CONNECTA%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd76577eebe89b324e4dd_CONNECTA%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd76577eebe89b324e4dd_CONNECTA%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd76577eebe89b324e4dd_CONNECTA%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd76577eebe89b324e4dd_CONNECTA%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd76577eebe89b324e4dd_CONNECTA%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Connecta. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "forma",
                        "name": "Forma",
                        "description": "The Forma is a premium addition to the Educational series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7813889f23ffa08ca86_FORMA%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7813889f23ffa08ca86_FORMA%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7813889f23ffa08ca86_FORMA%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7813889f23ffa08ca86_FORMA%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7813889f23ffa08ca86_FORMA%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7813889f23ffa08ca86_FORMA%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7813889f23ffa08ca86_FORMA%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Forma. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "magazine-rack",
                        "name": "Magazine Rack",
                        "description": "The Magazine Rack is a premium addition to the Educational series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7b1b497193ee0610672_MAGAZINE%20RACK%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7b1b497193ee0610672_MAGAZINE%20RACK%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7b1b497193ee0610672_MAGAZINE%20RACK%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7b1b497193ee0610672_MAGAZINE%20RACK%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7b1b497193ee0610672_MAGAZINE%20RACK%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7b1b497193ee0610672_MAGAZINE%20RACK%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7b1b497193ee0610672_MAGAZINE%20RACK%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Magazine Rack. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    }
                ]
            },
            {
                "id": "hostel",
                "name": "Educational",
                "description": "The Educational series from our Educational collection.",
                "products": [
                    {
                        "id": "wooden-bed",
                        "name": "Wooden Bed",
                        "description": "The Wooden Bed is a premium addition to the Educational series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7e0c0b44b82c236bcd7_WOODEN%20BED%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7e0c0b44b82c236bcd7_WOODEN%20BED%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7e0c0b44b82c236bcd7_WOODEN%20BED%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7e0c0b44b82c236bcd7_WOODEN%20BED%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7e0c0b44b82c236bcd7_WOODEN%20BED%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7e0c0b44b82c236bcd7_WOODEN%20BED%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7e0c0b44b82c236bcd7_WOODEN%20BED%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Wooden Bed. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "metal-bed",
                        "name": "Metal Bed",
                        "description": "The Metal Bed is a premium addition to the Educational series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7fabeb684f226fbea62_METAL%20BED%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7fabeb684f226fbea62_METAL%20BED%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7fabeb684f226fbea62_METAL%20BED%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7fabeb684f226fbea62_METAL%20BED%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7fabeb684f226fbea62_METAL%20BED%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7fabeb684f226fbea62_METAL%20BED%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd7fabeb684f226fbea62_METAL%20BED%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Metal Bed. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    }
                ]
            },
            {
                "id": "auditorium",
                "name": "Educational",
                "description": "The Educational series from our Educational collection.",
                "products": [
                    {
                        "id": "audi-chair",
                        "name": "Audi Chair",
                        "description": "The Audi Chair is a premium addition to the Educational series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd823f9d8425bd69f01a2_AUDI%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd823f9d8425bd69f01a2_AUDI%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd823f9d8425bd69f01a2_AUDI%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd823f9d8425bd69f01a2_AUDI%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd823f9d8425bd69f01a2_AUDI%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd823f9d8425bd69f01a2_AUDI%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd823f9d8425bd69f01a2_AUDI%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Audi Chair. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "podium",
                        "name": "Podium",
                        "description": "The Podium is a premium addition to the Educational series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd83f0ac6aa428dd06515_PODIUM%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd83f0ac6aa428dd06515_PODIUM%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd83f0ac6aa428dd06515_PODIUM%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd83f0ac6aa428dd06515_PODIUM%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd83f0ac6aa428dd06515_PODIUM%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd83f0ac6aa428dd06515_PODIUM%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68abd83f0ac6aa428dd06515_PODIUM%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Podium. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": "accessories",
        "name": "Accessories",
        "description": "Explore practical office accessories including marker boards, laptop tables, and utility add-ons. Designed to support meetings, presentations, and flexible working styles, these solutions enhance usability, mobility, and productivity across modern office environments.",
        "series": [
            {
                "id": "accessories-all",
                "name": "Accessories",
                "description": "The Accessories series from our Accessories collection.",
                "products": [
                    {
                        "id": "ledge",
                        "name": "Ledge",
                        "description": "The Ledge is a premium addition to the Accessories series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e727fb39a239356bbf45b_image%201233%20(37).png",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e727fb39a239356bbf45b_image%201233%20(37).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e727fb39a239356bbf45b_image%201233%20(37).png",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e727fb39a239356bbf45b_image%201233%20(37).png"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e727fb39a239356bbf45b_image%201233%20(37).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e727fb39a239356bbf45b_image%201233%20(37).png",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e727fb39a239356bbf45b_image%201233%20(37).png"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Ledge. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    },
                    {
                        "id": "marker-board-nuvora",
                        "name": "Marker Board - Nuvora",
                        "description": "The Marker Board - Nuvora is a premium addition to the Accessories series.",
                        "flagshipImage": "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6946bb57bd1e3c74085fa3b3_MARKER%20BOARD%201.jpg",
                        "sceneImages": [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6946bb57bd1e3c74085fa3b3_MARKER%20BOARD%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6946bb57bd1e3c74085fa3b3_MARKER%20BOARD%201.jpg",
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6946bb57bd1e3c74085fa3b3_MARKER%20BOARD%201.jpg"
                        ],
                        "variants": [
                            {
                                "id": "standard",
                                "variantName": "Standard Configuration",
                                "galleryImages": [
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6946bb57bd1e3c74085fa3b3_MARKER%20BOARD%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6946bb57bd1e3c74085fa3b3_MARKER%20BOARD%201.jpg",
                                    "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6946bb57bd1e3c74085fa3b3_MARKER%20BOARD%201.jpg"
                                ]
                            }
                        ],
                        "detailedInfo": {
                            "overview": "Experience the pinnacle of design with the Marker Board - Nuvora. Crafted for modern professionals, it seamlessly blends form and function to elevate any workspace.",
                            "features": [
                                "Ergonomic design for all-day comfort",
                                "Premium, high-durability materials",
                                "Sleek, architectural aesthetic",
                                "Built to BIFMA standards"
                            ],
                            "dimensions": "Standard Dimensions (Refer to spec sheet)",
                            "materials": [
                                "Engineered structure",
                                "Premium finish"
                            ]
                        }
                    }
                ]
            }
        ]
    }
];
