import styled from "styled-components"

const ListStyledItens = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$active ? '#7B78E5' : '#D9D9D9' };
    font-family: ${ props => props.$active ? 'GandhiSansBold' : 'GandhiSansRegular' };
    display: flex;
    align-items: center;
    gap: 22px;
`

export default function ItemNavigation({ children, activeIcon, inactiveIcon, active = false }) {
    return (
        <ListStyledItens $active={active}>
            <img src={active ? activeIcon : inactiveIcon} alt={`Ícone ${children}`} />
            {children}
        </ListStyledItens>
    )
}
