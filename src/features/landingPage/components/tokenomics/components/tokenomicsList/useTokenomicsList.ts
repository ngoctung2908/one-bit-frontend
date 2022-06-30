export const useTokenomicsList = () => {
    const tokenomics = [
        {
            percent: 1,
            name: 'Seed sale',
            description: 'Unlock 1% at TGE, 3 months lock, then linear monthly in 18 month.',
            token: 280000
        },
        {
            percent: 13,
            name:'Private sale',
            description: 'Unlock 3% at TGE, 2 months lock up, then linear daily vesting in 18 months.',
            token: 3640000
        },
        {
            percent: 1,
            name:'Public sale',
            description: '20% TGE, then linear monthly vesting in 04 months.',
            token: 280000
        },
        {
            percent: 25,
            name:'Insurrance reward',
            description: 'Unlock 7.5% per quarter, start unlocking upon Insurrance pool  Launch.',
            token: 7000000
        },
        {
            percent: 15,
            name:'Staking reward',
            description: 'Start unlocking upon staking Launch, linear vesting in 36 months.',
            token: 7000000
        },
        {
            percent: 11,
            name:'Liquidity',
            description: '5% TGE, then vesting 12 months',
            token: 3080000
        },
        {
            percent: 6,
            name:'Fund Reserve',
            description: '6 months lock up, then vesting for 2 years.',
            token: 1680000
        },
        {
            percent: 20,
            name:'Founder & Team',
            description: '6 month lock up, then vesting montyly for 3 years.',
            token: 5600000
        },
        {
            percent: 5,
            name:'Marketing & Partnership ',
            description: '5 month lock up, then vesting montyly for 3 years.',
            token: 560000
        },{
            percent: 3,
            name:'Advisor ',
            description: '3 month lock up, then vesting montyly for 3 years.',
            token: 280000
        }

    ]
    
    return { tokenomics }
    
}