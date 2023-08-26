import PacakageDetailBookData from "./PacakageDetailBookData";
import PacakageDetailBookGallery from "./PacakageDetailBookGallery"
import PacakageDetailData from "./PacakageDetailData";


export default function HimachalPacakage() {

    const Himachal = PacakageDetailBookData.filter(E => E.destname === "Himachal Holiday Pacakage")
    const HimachalItems = Himachal.map((E) =>
        <PacakageDetailBookGallery destname={E.destname} image={E.image} Overview={E.Overview} Iternary={E.Iternary} Hotel={E.Hotel} Inclusion={E.Inclusion} Exclusion={E.Exclusion} />)


    return (
        <div>
            <PacakageDetailData data={HimachalItems} />
        </div>
    )
}