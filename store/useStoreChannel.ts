import { defineStore } from "pinia";

interface Channel {
    id: number;
    src: string;
    name: string;
    description: string;
}

interface state {
    channels: Channel[];
    selectedChannel: Channel;
}

export const useStoreChannel = defineStore('channel', () => {
    const state = ref<state>({
        channels: [],
        selectedChannel: {
            id: 0,
            src: '',
            name: '',
            description: '',
        },
    })

    const getChannels = computed(() => state.value.channels);
    const getSelectedChannel = computed(() => state.value.selectedChannel);

    const setSelectedChannel = (channel: Channel) => {
        state.value.selectedChannel = channel;
    };

    const setChannels = (channels: Channel[]) => {
        state.value.channels = channels;
    };

    return{
        getChannels,
        getSelectedChannel,
        setSelectedChannel,
        setChannels,
    }
})