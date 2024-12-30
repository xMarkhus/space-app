import styled from "styled-components"
import ItemNavigation from "./ItemNavigation";

const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 212px;
`;

export default function Sidebar() {
    return (
        <aside>
            <nav>
                <StyledList>
                    <ItemNavigation
                        href=""
                        activeIcon={"/icons/home-ativo.png"}
                        inactiveIcon={"/icons/home-inativo.png"}
                        active={true}
                    >
                        Início
                    </ItemNavigation>

                    <ItemNavigation
                        href=""
                        activeIcon={"/icons/mais-vistas-ativo.png"}
                        inactiveIcon={"/icons/mais-vistas-inativo.png"}
                    >
                        Mais vistas
                    </ItemNavigation>

                    <ItemNavigation
                        href=""
                        activeIcon={"/icons/mais-curtidas-ativo.png"}
                        inactiveIcon={"/icons/mais-curtidas-inativo.png"}
                    >
                        Mais curtidas
                    </ItemNavigation>

                    <ItemNavigation
                        href=""
                        activeIcon={"/icons/novas-ativo.png"}
                        inactiveIcon={"/icons/novas-inativo.png"}
                    >
                        Novas
                    </ItemNavigation>

                    <ItemNavigation
                        href=""
                        activeIcon={"/icons/surpreenda-me-ativo.png"}
                        inactiveIcon={"/icons/surpreenda-me-inativo.png"}
                    >
                        Surpreenda-me
                    </ItemNavigation>
                </StyledList>
            </nav>
        </aside>
    )
}
