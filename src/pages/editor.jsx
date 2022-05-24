import { useState } from "react"
import { DynamicCmp } from "../cmps/dyamin-cmp"

export const Editor = () => {

    const [wap, setWap] = useState({
        _id: "5e28393890dd7201a06d4e44",
        name: "Resort",
        thumbnail: "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642926845/rlhviliowwd0fi2oblsm.jpg",
        type: "container",
        cmps: [{
            id: "vvJklf8",
            type: "container",
            category: "wap-header",
            className: "wap-header-1",
            thumbnail: "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642950099/mute1ysfnzjcsrlexz25.jpg",
            style: {
                padngBlock: 0,
                backgroundColor: "#1D375A"
            },
            cmps: [
                {
                    id: "savdj7",
                    type: "txt",
                    txt: "Pacifico",
                    style: {
                        color: "#000000",
                        fontFamily: "kalam",
                        fontSize: 40,
                    },
                },
                {
                    id: "ssbcgdhsa1",
                    type: "container",
                    style: {
                        backgroundColor: "#1D375A",
                        border: "1px solid red"
                    },
                    cmps: [
                        {
                            id: "sasdj7",
                            type: "anchor",
                            url: "https://www.google.com",
                            txt: "More details",
                            className: "nav-link",
                            style: {
                                color: "whitesmoke",
                            },
                        },
                        {
                            id: "sasdj8",
                            type: "anchor",
                            url: "https://www.google.com",
                            txt: "More details222",
                            className: "nav-link",
                            style: {
                                color: "whitesmoke",
                            },
                        },
                        {
                            id: "sasdj9",
                            type: "img",
                            url: "https://m.media-amazon.com/images/I/81ZifMbP2dL._SY450_.jpg",
                            txt: "More details222",
                            className: "nav-link",
                            style: {
                                color: "black",
                                maxHeight: '150px'
                            },
                        },
                    ]
                }
            ]
        },
        {
            id: "vvJklf89",
            type: "container",
            category: "wap-header",
            className: "wap-header-1",
            thumbnail: "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642950099/mute1ysfnzjcsrlexz25.jpg",
            style: {
                padngBlock: 0,
                backgroundColor: "green"
            },
            cmps: [
                {
                    id: "savdj79",
                    type: "txt",
                    txt: "Pacifico",
                    style: {
                        color: "#000000",
                        fontFamily: "kalam",
                        fontSize: 40,
                    },
                },
                {
                    id: "ssbcgdhsa1",
                    type: "container",
                    style: {
                        border: "1px solid red"
                    },
                    cmps: [
                        {
                            id: "sasdj97",
                            type: "img",
                            url: "https://www.vermontteddybear.com/dw/image/v2/BDKM_PRD/on/demandware.static/-/Sites-master-catalog-vtb/default/dw0c5c4cde/images/VTB/vtb-23846-18ohsosoftteddybear-lightbrown_feature4_20201012_0843.jpg?sw=600",
                            txt: "More details222",
                            className: "nav-link",
                            style: {
                                color: "black",
                                maxHeight: "100px"
                            },
                        },
                        {
                            id: "sasdj98",
                            type: "img",
                            url: "https://www.vermontteddybear.com/dw/image/v2/BDKM_PRD/on/demandware.static/-/Sites-master-catalog-vtb/default/dw0c5c4cde/images/VTB/vtb-23846-18ohsosoftteddybear-lightbrown_feature4_20201012_0843.jpg?sw=600",
                            txt: "More details222",
                            className: "nav-link",
                            style: {
                                color: "black",
                                maxHeight: "100px"
                            },
                        },
                        {
                            id: "sasdj99",
                            type: "img",
                            url: "https://www.vermontteddybear.com/dw/image/v2/BDKM_PRD/on/demandware.static/-/Sites-master-catalog-vtb/default/dw0c5c4cde/images/VTB/vtb-23846-18ohsosoftteddybear-lightbrown_feature4_20201012_0843.jpg?sw=600",
                            txt: "More details222",
                            className: "nav-link",
                            style: {
                                color: "black",
                                maxHeight: "100px"
                            },
                        },
                    ]
                }
            ]
        }
        ]
    })

    return <section className="editor">
        {wap.cmps.map(cmp => <DynamicCmp key={cmp.id} cmp={cmp} />)}
    </section>
}