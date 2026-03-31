document.addEventListener("DOMContentLoaded", function () {

    pannellum.viewer('panorama', {
        default: {
            firstScene: "sala1",
            sceneFadeDuration: 1000,
            autoLoad: true
        },

        scenes: {

            sala1: {
            title: "Sala 1",
            type: "equirectangular",
            panorama: "assets/imagem1.jpg",
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 182,
                    type: "scene",
                    text: "Ir para Sala 2",
                    sceneId: "sala2"
                },
                {
                    pitch: 3,
                    yaw: -96,
                    type: "scene",
                    text: "Ir para Sala 3",
                    sceneId: "sala3"
                }
            ]
            },

            sala2: {
                title: "Sala 2",
                type: "equirectangular",
                panorama: "assets/imagem2.jpg",
                hotSpots: [
                    {
                        pitch: 0,
                        yaw: -171,
                        type: "scene",
                        text: "Voltar para Sala 1",
                        sceneId: "sala1"
                    }
                ]
            },

            sala3: {
                title: "Sala 3",
                type: "equirectangular",
                panorama: "assets/imagem3.jpg",
                hotSpots: [
                    {
                        pitch: 0,
                        yaw: -29,
                        type: "scene",
                        text: "Voltar para Sala 1",
                        sceneId: "sala1"
                    }
                ]
            }

        }
    });

});