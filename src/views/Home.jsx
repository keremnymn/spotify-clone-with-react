import Section from "component/Section"

function Home() {

    const items = [
        {
            id: 1,
            title: "This is Nikki Yanofsky",
            description: "This is Nikki Yanofsky. The essential tracks, all in one playlist.",
            image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0KFBne-default.jpg",
            isRound: false
        },
        {
            id: 2,
            title: "Podcastia Maceraları - Bir RPG Yayını!",
            description: "otarzmi",
            image: "https://i.scdn.co/image/ab67656300005f1f27df1225b5b0aa786e29f5c3",
            isRound: false
        },
        {
            id: 3,
            title: "Denzel Curry",
            description: "Artist",
            image: "https://i.scdn.co/image/ab67616100005174b00f2e31d509ddc6fa0eb24b",
            isRound: true
        },
        {
            id: 4,
            title: "Kendrick Lamar",
            description: "Artist",
            image: "https://i.scdn.co/image/ab67616100005174437b9e2a82505b3d93ff1022",
            isRound: true
        },
        {
            id: 5,
            title: "Easy Jazz",
            description: "The easy listening sound of jazz. Cover: Norah Jones",
            image: "https://i.scdn.co/image/ab67706f0000000290d8df7e39072c0ce27be78d",
            isRound: false
        }
    ]

    return (
        <div className="grid gap-y-8">
            <Section 
                title = "Recently played"
                more="/see-all"
                items={items}
            />
            <Section 
                title = "Made for Kerem Nayman"
                items={items}
            />
        </div>
    )
}

export default Home