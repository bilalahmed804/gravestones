// schemas/home.ts
const HomeSchema = {
    name: 'home',
    title: 'Home Page',
    type: 'document',
    fields: [
        { name: 'heroTitle', type: 'string', title: 'Hero Title' },
        { name: 'heroSubtitle', type: 'string', title: 'Hero Subtitle' },
        { name: 'ctaText', type: 'string', title: 'CTA Text' },
        { name: 'ctaLink', type: 'string', title: 'CTA Link' },
        { name: 'heroImage', type: 'image', title: 'Hero Image' },
        { name: 'introTitle', type: 'string', title: 'Intro Title' },
        { name: 'introText', type: 'text', title: 'Intro Description' }
    ],
}

export default HomeSchema;
