var artistInfo = {
    props: ['data'],
    template: '#artistInfo',
    created: function(){
        window.scrollTo(0, 0);
    }
}

var artists = new Vue({
    el: '#artistList',
    components: {
        'artist-info': artistInfo
    },
    data: {
        artists: [
            {
                "name": "Black Highway",
                "genre": "experimental / drone / industrial",
                "text": "Derepetative confiteor of momentus of our bystanding passing presence one more time thrown into meltage of the relentless furnace to liquefy known tissues of knowledge in transcendental comprehension of the encumbered soil that we standing on and the processes beneath the surface. The entity that skins the sounds from imperative chimneys, producing plants and used but still imperious red steel machinery to invoke vindication of surrounded transiency which echoes to aeons. A dronish aesthetic purr mixed with neuro-muscular industrial noise stretched on psychedelic and many times even pernicious entirety.",
                "img": "blackhighway.jpg",
                "embed": "<iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" src=\"https:\/\/w.soundcloud.com\/player\/?url=https%3A\/\/api.soundcloud.com\/tracks\/253341828&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true\"><\/iframe>",
                "link": [ 
                    "https://blackhighway.bandcamp.com/releases", 
                    "http://bandzone.cz/blackh", 
                    "https://soundcloud.com/black-highway/triturat"
                ],
                "show": false
            },
            {
        
                "name": "Das Geheim",
                "genre": "",
                "text": "Dutch electronic music production duo. DAS GEHEIM was raised by the free-spirit tribes of Europe, haunted by ghosts in the machine and spoiled by the riches of the black gold.",
                "img": "dasgeheim.jpg",
                "embed": "<iframe style=\"border: 0; width: 350px; height: 470px;\" src=\"https:\/\/bandcamp.com\/EmbeddedPlayer\/album=1419105530\/size=large\/bgcol=ffffff\/linkcol=0687f5\/tracklist=false\/transparent=true\/\" seamless><a href=\"http:\/\/dasgeheim.bandcamp.com\/album\/moment-sustain\">Moment Sustain by Das Geheim<\/a><\/iframe>",
                "link": [
                    "https://soundcloud.com/dasgeheim",
                    "https://dasgeheim.bandcamp.com"
                ],
                "show": false
            },
            {
                "name": "Exoterrism",
                "genre":"",
                "text": "In his work, Exoterrism (Fan Yau born in Hong Kong 1987), seeks to overcome the separation between geometrical consciousness and the coming four dimensional perception. Influenced by esoteric systems, Yau often engages computer processed algorithms,functions. Constantly seeking for new sounds and synthesizing techniques, he researches the links and differences in human rational, scientific thinking and our existence as a spiritual being in the universe. Through experimentations of sound and its reaction on the human body, Exoterrism aims at creating short term hallucinations or extra-terrestrial experiences. Once technology has surpassed the current notion of space and time, patterns repeating through a multidimensional expanding dynamic system are feed-backing through the present moment. When human soul is interpreted as binary decisions and the mind becomes only a consequence of a loop from where you are conditioned. Segmenting to different strata's between the moment you think and the moment you execute.",
                "img": "exoterrism.jpg",
                "embed": "<iframe width=\"560\" height=\"315\" src=\"https:\/\/www.youtube.com\/embed\/MaCbfSXX6rk\" frameborder=\"0\" allowfullscreen><\/iframe>",
                "link": [ 
                    "https://soundcloud.com/exoterrism",
                    "https://soundcloud.com/exo-terrism",
                    "https://www.youtube.com/watch?v=UGW-e4pLbE0",
                    "https://www.youtube.com/watch?v=UJMLcrkuCsY",
                    "https://www.youtube.com/watch?v=XDMKiPqaNns",
                    "https://www.facebook.com/exoterrism/"
                ],
                "show": false
            },
            {
                "name": "Jacques Kustod",
                "genre": "",
                "text": "Jacques Kustod is producer currently based in Bratislava. His music is combination of dub psychedelia, cosmic vastness of krautrock and rhyhtm force influenced by techno and electro. Result is implosion of the overall outcome.",
                "img": "jacqueskustod.jpg",
                "embed": "<iframe width=\"100%\" height=\"300\" scrolling=\"no\" frameborder=\"no\" src=\"https:\/\/w.soundcloud.com\/player\/?url=https%3A\/\/api.soundcloud.com\/tracks\/320327551&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true\"><\/iframe>",
                "link": ["https://jacqueskustod.bandcamp.com/","https://soundcloud.com/jacques-kustod"],
                "show": false
            },
            {
                "name": "Jamka",
                "genre": "techno / IDM",
                "text": "Hailing from the Slovakian noise scene, London based electronic female-male duo Jamka use synthesizers, sequencers, samplers and various FX boxes to touch on the darker, rhythmically complex side of techno, industrial and noise music. Their new Inter Alia 12'' continues their intimate relationship with analogue machines.",
                "img": "jamka.jpg",
                "embed": "<iframe width=\"560\" height=\"315\" src=\"https:\/\/www.youtube.com\/embed\/QyUMF9wEsT0\" frameborder=\"0\" allowfullscreen><\/iframe>",
                "link": ["https://jamka.bandcamp.com/"],
                "show": false
            },
            {
                "name": "Makkatu",
                "genre":"techno / experimental",
                "text": "Makkatu is one man musical act from Slovakia exploring diverse approaches to electronic music from dark cold room and submerged experimental techno to noisy and atmospheric soundscapes closer to the minimal side.",
                "img": "makkatu.jpg",
                "embed": "<iframe width=\"560\" height=\"315\" src=\"https:\/\/www.youtube.com\/embed\/qDuV-4wJIpQ\" frameborder=\"0\" allowfullscreen><\/iframe>",
                "link": [
                    "https://soundcloud.com/makkatu", 
                    "https://urbsounds.bandcamp.com/album/ordeal-no-34"
                ],
                "show": false
            },
            {
                "name": "Palmovka",
                "genre": "",
                "text": "Palmovka who is behind Easterndaze and BABA VANGA label bringing to life improvised hardware-driven electronics, field recordings and mangled beats.",
                "img": "palmovka.jpg",
                "embed": "<iframe width=\"560\" height=\"315\" src=\"https:\/\/www.youtube.com\/embed\/ZEiveRcXsE4\" frameborder=\"0\" allowfullscreen><\/iframe>",
                "link": ["https://babavan.ga"],
                "show": false
            },
            {
                "name": "Seismic Wave Factory",
                "genre": "",
                "text":	"The storm that brings ecstasy and feelings of the transformation through the sound, the spirit and the fire. The imagery of master-slave relationship, the embodiment of human alienation, those are information transmitted by the cyber-apostles for the next century, for hybrids and clones century.",
                "img": "seismicwavefactory.jpg",
                "embed": "<iframe width=\"560\" height=\"315\" src=\"https:\/\/www.youtube.com\/embed\/xCrJl_haKrE\" frameborder=\"0\" allowfullscreen><\/iframe>",
                "link": ["http://bandzone.cz/seismicwavefactory"],
                "show": false
            },
            {
        
                "name": "The Blackwood Incident",
                "genre": "drone/ambient",
                "text": "The Blackwood Incident is an audiovisual project led by Dominik Novak / .soundscapes, triple sun, Oskar /, surfing the mutable boundaries of psychedelic ambient and cinematic drone. Using analog/modular synths as a means to express himself, the project creates safe haven to deal with questions of one's place in society, doubt and emotional struggles are converted into sound. as a live entity, Blackwood is accompanied by analog visuals of Jozef Cabo, which uses CRT Televisions or LCD monitors to enrich the psychedelic overtone of the experience. The sound pallete is also augmented by a variable line up of performers, most notably Michal Hroz�n / oskar /, with 	his ritual acoustic instruments and the rich library of microscopic sounds provided by Amalia R. Filip / Chaosdroid, melting /. Due to the nature of the used instruments and the souls playing them, each live set is a uniquesound exploration of the psyche, just as fleeting and transient as the CRT waves flashing and pulsing among players. Except numerous live performances, The Blackwood Incident also released its debut album 'Curse of the Tribe' on Bratislava's new cassette label Evocative Objects (March 2017) - an album that takes the listener on a journey through soundscapes of lava-black melodies and iridescent sonic sparks of hope. A Journey never ending.",
                "img": "theblackwoodincident.jpg",
                "embed": "<iframe width=\"560\" height=\"315\" src=\"https:\/\/www.youtube.com\/embed\/hzPsgbQbn8g\" frameborder=\"0\" allowfullscreen><\/iframe>",
                "link": ["https://soundcloud.com/theblackwoodincident", "https://evocativeobjects.bandcamp.com/album/curse-of-the-tribe"],
                "show": false
            },
            {
                "name": "Tzii",
                "genre": "",
                "text": "Since the 90's Tzii, music composer and filmmaker, spreads his frequencies all over the world through touring from Eastern and Western Europe to Australia, passing by USA, Canada, Mexico, Japan, Indonesia and Africa, where he played hundreds of shows .... He created his own label NIGHT ON EARTH in 2001, releasing vinyls and tapes, and is a co-founder & active member of the audiovisual label/collective V-ATAK. His main aim is to reach transcendance through sound trance, layering and looping to another dimension to let the emotional body flow freely on the waves ...... To do so he explores infinite different worlds and expressions, from music to performance or collective creations. One thing always remains in his works : they're impossible to fit in any box. 'A mountain of multiple figures' as defined by Nyx.<br> He's part of several other projects like SOLAR SKELETONS, MS30, 1997EV, VIRIL, AEROBICONOISE, collaborated with many others and works also for dance companies, living performances, movie soundtracks and any other mediums with sound inside .....",
                "img": "tzii.jpg", 
                "embed": "<iframe width=\"560\" height=\"315\" src=\"https:\/\/www.youtube.com\/embed\/S4kny92O7yY\" frameborder=\"0\" allowfullscreen><\/iframe>",
                "link": ["http://www.tzii.tk",
                    "http://www.vidioatak.org/~nightonearth/tzii/gallery.html",
                    "http://www.ursss.com/2016/11/tzii/",
                    "http://tzii.bandcamp.com",
                    "https://hearthis.at/gpkhncx7/"],
                "show": false
            },
            {
                "name": "Unprofessional",
                "genre": "hardcore techno",
                "text": "Where Arminius has stopped the Roman conquest of territories east of the Rhein Unprofessional has succeeded. With lutes and lyres she brings the long absent Picenian melodies to the city of Berolinum to challenge its masters percussionists.",
                "img": "unprofessional.jpg",
                "embed": "<iframe width=\"100%\" height=\"400\" src=\"https:\/\/www.mixcloud.com\/widget\/iframe\/?feed=%2Fgi-giuglia-vu%2Flive-unprofessional-ms-stubniz-hamburgde-21112015%2F\" frameborder=\"0\" ><\/iframe>",
                "link": ["https://www.mixcloud.com/gi-giuglia-vu","https://soundcloud.com/unprofessional"],
                "show": false
            },
            {
                "name": "W.Ravenveer",
                "genre": "experimental",
                "text": "w.ravenveer aka erwin looveren, antwerpen, belgium  makes mostly improvised electronic music on the more experimental spectrum, inspired by his own ways of learning and dealing with life , indirect influeced by being big music lover of music of different kind but mostly more on the outer edge woo linn ravenveer",
                "img": "wravenveer.jpg",
                "embed": "<iframe width=\"560\" height=\"315\" src=\"https:\/\/www.youtube.com\/embed\/3yrzhR6boKo\" frameborder=\"0\" allowfullscreen><\/iframe>",
                "link": ["https://soundcloud.com/w-ravenveer"],
                "show": false
            }
        ]
    }
})