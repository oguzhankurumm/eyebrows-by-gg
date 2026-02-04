export const SERVICES = [
    {
        name: "Powder Brows",
        price: "$400",
        category: "Brows",
        description: "Soft, misty shading that mimics the look of filled-in brows with makeup. Perfect for all skin types.",
    },
    {
        name: "Combo Brows",
        price: "$450",
        category: "Brows",
        description: "The best of both worlds: natural hair strokes and soft shading for added definition.",
    },
    {
        name: "Nanoblading",
        price: "$500",
        category: "Brows",
        description: "Ultra-realistic hair strokes created with a machine for a natural, fluffy look.",
    },
    {
        name: "Eyebrows Touch Up",
        price: "$200",
        category: "Brows",
        description: "Perfecting session for existing clients.",
    },
    {
        name: "Yearly Eyebrow Touch Up",
        price: "$400",
        category: "Brows",
        description: "Annual color refresh.",
    },
    {
        name: "Lip Blush",
        price: "$500",
        category: "Lips",
        description: "Enhance your natural lip shape and color with a soft wash of pigment.",
    },
    {
        name: "Lip Blush Touch Up",
        price: "$250",
        category: "Lips",
        description: "Perfecting session for lip blush.",
    },
    {
        name: "Consultation",
        price: "$75",
        category: "General",
        description: "Discuss your goals and eligibility for permanent makeup.",
    },
    {
        name: "Eyebrow Threading",
        price: "$20",
        category: "Threading",
        description: "Precision hair removal.",
    },
    {
        name: "Eyebrow Threading & Henna Tinting",
        price: "$45",
        category: "Threading",
        description: "Shape and tint for a bolder look.",
    },
    {
        name: "Upper Lip Threading",
        price: "$5",
        category: "Threading",
        description: "Gentle hair removal.",
    },
    {
        name: "Full Face Threading",
        price: "$60",
        category: "Threading",
        description: "Complete facial hair removal.",
    },
    {
        name: "Natural Tattoo Removal + Vitamin",
        price: "$150",
        category: "Removal",
        description: "Gentle removal of unwanted pigment.",
    },
    {
        name: "Natural Eyebrow Growth",
        price: "$500",
        category: "Treatment",
        description: "Stimulate natural brow growth.",
    },
    {
        name: "Eyebrow Growth Serum (3 products)",
        price: "$175",
        category: "Products",
        description: "Take-home care kit.",
    },
    {
        name: "Hair Treatment",
        price: "$1000",
        category: "Hair",
        description: "Advanced hair restoration treatment.",
    },
    {
        name: "Make-up",
        price: "$100",
        category: "Makeup",
        description: "Professional makeup application.",
    },
    {
        name: "Kids Make-up",
        price: "$50",
        category: "Makeup",
        description: "Light makeup for special occasions.",
    },
];

export const SERVICE_CATEGORIES = Array.from(new Set(SERVICES.map(s => s.category)));
