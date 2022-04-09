import RootStore from "./RootStore.store";
export const storeProvider=RootStore.create({
    contents: [
        {
            id: '1',
            title: "Card title 1",
            description: "description",
            seen: false,
            notite: '',
        },
        {
            id: '2',
            title: "Card title 2",
            description: "description",
            seen: false,
            notite: '',
        },
        {
            id: '3',
            title: "Card title 3",
            description: "description",
            seen: false,
            notite: '',
        },
        {
            id: '4',
            title: "Card title 4",
            description: "description",
            seen: false,
            notite: '',
        },
        {
            id: '5',
            title: "Card title 5",
            description: "description",
            seen: false,
            notite: '',
        },
        {
            id: '6',
            title: "Card title 6",
            description: "description",
            seen: true,
            notite: 'Prima notita',
        },
    ]
})

export default storeProvider