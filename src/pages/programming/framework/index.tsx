import SubCabecalhoFramework from "@/src/components/Programming/Framework/SubCabecalhoFramework/SubCabecalhoFramework";
import CabecalhoFramework from "../../../components/Programming/Framework/Cabecalho/CabecalhoFramework";
import CorpoFramework from "../../../components/Programming/Framework/Corpo/CorpoFramework";

export default function Framework() {
    return (
        <>
            <CabecalhoFramework />
            <SubCabecalhoFramework />
            <CorpoFramework />
        </>
    )
}