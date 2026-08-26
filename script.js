const btnTopo = document.getElementById("btn-topo");
if (btnTopo) {
    const alternarVisibilidade = () => {
        if (window.scrollY > 400) {
            btnTopo.classList.add("visivel");
        } else {
            btnTopo.classList.remove("visivel");
        }
    };

    window.addEventListener("scroll", alternarVisibilidade, { passive: true });
    alternarVisibilidade();

    btnTopo.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}