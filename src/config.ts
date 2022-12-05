export default {
    //SCENE FACING: "NORTH"/"EAST"/"SOUTH"/"WEST"
    sceneOrientation: "NORTH",
    logo: {
        bottom: {
            //image should be 512px square
            imgSrc: "images/logoArt.jpg",
            position: new Vector3(0, 5.8883, 6.9747)

        },
        top: {
            name: "Art\nMuseum",
            fontSize: 10,
            color: new Color3(0.1, 0.1, 0.1),
            position: new Vector3(0, 10.8, 7.15)
        }
    },
    nftImage: [
        {
            name: "image 1",
            imgSrc: "images/art2.jpg",
            link: "https://art-museum-henna.vercel.app/",
            width: 512,
            height: 512,
            position: new Vector3(6.8, 2.6, 4.2)
        },
        {
            name: "image 2",
            imgSrc: "images/art3.jpg",
            link: "https://art-museum-henna.vercel.app/",
            width: 256,
            height: 512,
            position: new Vector3(6.8, 2.6, -4.2)
        },
        {
            name: "image 3",
            imgSrc: "images/art4.jpg",
            link: "https://art-museum-henna.vercel.app/",
            width: 512,
            height: 256,
            position: new Vector3(-6.8, 2.6, 4.2)
        },
        {
            name: "image 4",
            imgSrc: "images/art5.jpg",
            link: "https://art-museum-henna.vercel.app/",
            width: 512,
            height: 512,
            position: new Vector3(-6.8, 2.6, -4.2)
        },
        {
            name: "image 5",
            imgSrc: "images/art6.jpg",
            link: "https://art-museum-henna.vercel.app/",
            width: 512,
            height: 512,
            position: new Vector3(6.8, 10, 4.2)
        },
        {
            name: "image 6",
            imgSrc: "images/art7.jpg",
            link: "https://art-museum-henna.vercel.app/",
            width: 256,
            height: 512,
            position: new Vector3(6.8, 10, -4.2)
        },
        {
            name: "image 7",
            imgSrc: "images/art8.jpg",
            link: "https://art-museum-henna.vercel.app/",
            width: 512,
            height: 256,
            position: new Vector3(-6.8, 10, 4.2)
        },
        {
            name: "image 8",
            imgSrc: "images/monalisa.jpg",
            link: "https://art-museum-henna.vercel.app/",
            width: 512,
            height: 512,
            position: new Vector3(-6.8, 10, -4.2)
        }
    ],
    socialMedia: [
        {
            name: "HOMEPAGE",
            model: "models/social_media/homepage.glb",
            link: "https://www.decentraland.org",
            position: new Vector3(6, 1.2, 0.7)
        },
        {
            name: "DISCORD",
            model: "models/social_media/discord.glb",
            link: "https://www.discord.org",
            position: new Vector3(6, 1.2, -0.7)
        },
        {
            name: "TWITTER",
            model: "models/social_media/twitter.glb",
            link: "https://www.twitter.com",
            position: new Vector3(-6, 1.2, 0.7)
        },
        {
            name: "TELEGRAM",
            model: "models/social_media/telegram.glb",
            link: "https://www.telegram.org",
            position: new Vector3(-6, 1.2, -0.7)
        }
    ],
    videoScreen: {
        src: 'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875',
        width: 1280,
        height: 720
    },
    sculpture: {
        modelSrc: "models/museum/sculpture.glb",
        position: new Vector3(0, 0.4, 1.5)
    }
}