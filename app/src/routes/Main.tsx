import Dock from "@/components/dock";
import {Archive, Home, Settings, User} from "lucide-react";
import {useNavigate} from "react-router";
import {useUser} from "@stackframe/react";
import Button from '@jetbrains/ring-ui-built/components/button/button';
import {H1, H2} from "@jetbrains/ring-ui-built/components/heading/heading";
import Input from "@jetbrains/ring-ui-built/components/input/input";
import Text from "@jetbrains/ring-ui-built/components/text/text";


export function Main() {
    useUser({or: "redirect"});

    const navigate = useNavigate();

    const items = [
        {
            icon: <Home size={18} className="color:white"/>,
            label: 'Home', onClick: () => alert('Home!')
        },
        {
            icon: <User size={18} className="color:white"/>,
            label: 'Profile', onClick: () => navigate('/employee')
        },
        {
            icon: <Archive size={18} className="color:white"/>,
            label: 'Archive', onClick: () => alert('Archive!')
        },
        {
            icon: <Settings size={18} className="color:white"/>,
            label: 'Settings', onClick: () => navigate('/handler/account-settings')
        },
    ];

    return (
        <section
            className="flex flex:1 flex:col h:100vh max-h:100vh w:100vw max-w:100vw overflow:auto bg:slate-95 font:sans pb:5rem">
            <div className="flex flex:col bg:#f8f9fa bb:1px|solid|#dee2e6 p:1.5rem py:4rem gap:2rem">
                <H1>Encuentra bienes en remate</H1>

                <div className="flex flex:col gap-y:0.5rem p:1rem bg:white b:1px|solid|#e9ecef r:0.5rem">
                    <Input
                        label="Tipo de bien"
                    />

                    <Input
                        label="Tipo de inmueble"
                    />

                    <Input
                        label="Departamento"
                    />

                    <Input
                        label="Ciudad"
                    />

                    <Input
                        label="Valor desde"
                    />

                    <Input
                        label="Valor hasta"
                    />

                    <Input
                        label="Fecha inicial audiencia"
                    />

                    <Input
                        label="Fecha final audiencia"
                    />
                </div>

                <Text size={Text.Size.S}>Buscar por palabra</Text>

                <Button primary>Buscar</Button>
            </div>

            <div className="flex flex:col p:1.5rem gap:2rem">
                <H2>Proximas audiencias</H2>

                <Auction/>
                <Auction/>
                <Auction/>
                <Auction/>
                <Auction/>
                <Auction/>

                <Auction/>
                <Auction/>
                <Auction/>
                <Auction/>
                <Auction/>
                <Auction/>
            </div>

            <Dock
                items={items}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
            />
        </section>
    )
}

function Auction() {
    return (
        <div className="flex flex:col gap:0.7rem p:1.5rem bg:#f8f9fa border:1px|solid|#e9ecef r:0.5rem">
            <div className="bg:#dee2e6 w:full video r:0.5rem"/>
            <div className="flex flex:row gap-x:0.5rem bg:#7de2d1 b:1px|solid|#00cecb p:0.3rem r:0.3rem">
                <Text size={Text.Size.S}>Número del remate:</Text>
                <Text size={Text.Size.S}>202506300000085</Text>
            </div>

            <Text info>Yopal - Casanare</Text>

            <div>
                <div className="flex flex:row gap-x:2rem">
                    <div className="flex flex:col">
                        <Text size={Text.Size.S} bold>Fecha de audiencia</Text>
                        <Text size={Text.Size.M}>2025-03-25</Text>
                    </div>

                    <div className="flex flex:col">
                        <Text size={Text.Size.S} bold>Hora audiencia</Text>
                        <Text size={Text.Size.M}>10:00</Text>
                    </div>
                </div>
            </div>

            <div className="flex flex:row gap-x:0.5rem">
                <Text size={Text.Size.S} bold>Avaluó del bien:</Text>
                <Text size={Text.Size.S} bold>922,140,000 COP</Text>
            </div>

            <div className="flex flex:col mb:0.5rem">
                <Text size={Text.Size.S}>Valor base oferta</Text>
                <Text bold>645,498,000 COP</Text>
            </div>

            <Button success>Ver</Button>
        </div>
    )
}