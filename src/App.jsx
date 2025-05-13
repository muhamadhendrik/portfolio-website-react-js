import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
    return (
        <>
            <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
                <div className="animate__animated animate__fadeInUp animate__delay-1s">
                    <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
                        <img
                            src={DataImage.HeroImage}
                            alt="Hero Image"
                            className="w-10 rounded-md"
                            loading="lazy"
                        />
                        <q>Kode yang indah, lahir dari ketekunan.🚀</q>
                    </div>
                    <h1 className="text-5xl/tight font-bold mb-6">
                        Hi, I'm Muhamad Hendrik
                    </h1>
                    <p className="text-base/loose mb-6 opacity-50">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Temporibus asperiores recusandae vitae iusto ipsam
                        nam! Id, quis iusto officia accusamus labore sapiente.
                        Magnam illo vel repellendus? Eum quae saepe blanditiis.
                    </p>
                    <div className="flex items-center sm:gap-4 gap-2">
                        <a
                            href="#"
                            className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
                            Download CV
                            <i className="ri-download-line ri-lg"></i>
                        </a>
                        <a
                            href="#"
                            className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
                            Lihat Proyek
                            <i className="ri-arrow-down-line ri-lg"></i>
                        </a>
                    </div>
                </div>
                <img
                    src={DataImage.HeroImage}
                    alt="Hero Image"
                    className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-2s"
                    loading="lazy"
                />
            </div>

            {/* About */}
            <div
                className="tentang mt-32 py-10"
                data-aos="fade-up"
                data-aos-duration="1000"
                id="tentang">
                <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
                    <img
                        src={DataImage.HeroImage}
                        alt="Image"
                        className="w-12 rounded-md mb-10 sm:hidden"
                        loading="lazy"
                    />
                    <p className="text-base/loose mb-10">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Neque ab accusantium assumenda iure fuga
                        doloremque quibusdam quasi ullam nihil facilis esse ut
                        itaque voluptas unde, officiis fugiat omnis, aliquam
                        recusandae quo illum dicta sint distinctio incidunt?
                        Provident ex autem neque quam inventore exercitationem
                        laboriosam totam magni voluptatem nostrum modi deleniti,
                        accusantium aut sed expedita iusto veniam perspiciatis
                        omnis at sit, vel dolore. Eum possimus, iste neque
                    </p>
                    <div className="flex items-center justify-between">
                        <img
                            src={DataImage.HeroImage}
                            alt="Image"
                            className="w-12 rounded-md sm:block hidden"
                            loading="lazy"
                        />
                        <div className="flex items-center gap-6">
                            <div>
                                <h1 className="text-4xl mb-1">
                                    45<span className="text-violet-500">+</span>
                                </h1>
                                <p>Proyek Selesai</p>
                            </div>
                            <div>
                                <h1 className="text-4xl mb-1">
                                    4<span className="text-violet-500">+</span>
                                </h1>
                                <p>Tahun Pengalaman</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* tools */}
            <div
                className="tools mt-32"
                data-aos="fade-up"
                data-aos-duration="1000">
                <h1 className="text-4xl/snug font-bold mb-4">
                    Tools yang digunakan
                </h1>
                <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-2/4 w-full text-base/loose opacity-50">
                    Berikut ini beberapa tools yang biasa saya gunakan untuk
                    pembuatan website ataupun design
                </p>
                <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {listTools.map((tool) => (
                        <div
                            className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-600"
                            key={tool.id}>
                            <img
                                src={tool.gambar}
                                alt="Tools Image"
                                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                                loading="lazy"
                            />
                            <div>
                                <h4 className="font-bold">{tool.nama}</h4>
                                <p className="opacity-50">{tool.ket}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* proyek */}
            <div
                className="proyek mt-32 py-10"
                data-aos="fade-up"
                data-aos-duration="1000"
                id="proyek">
                <h1 className="text-center font-bold text-4xl mb-2">Proyek</h1>
                <p className="text-base/loose text-center opacity-50">
                    Berikut ini beberapa proyek yang telah saya buat.
                </p>
                <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {listProyek.map((proyek) => (
                        <div
                            className="p-4 bg-zinc-800 rounded-md"
                            key={proyek.id}>
                            <img
                                src={proyek.gambar}
                                alt="Proyek Image"
                                loading="lazy"
                            />
                            <div>
                                <h1 className="text-2xl font-bold my-4">
                                    {proyek.nama}
                                </h1>
                                <p className="text-base/loose mb-4">
                                    {proyek.desk}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {proyek.tools.map((tool, index) => (
                                        <p
                                            className="py-1 px-3 border border-zinc-500 rounded-md font-semibold bg-zinc-600"
                                            key={index}>
                                            {tool}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <a
                                    href="#"
                                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">
                                    Lihat Website
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Kontak */}
            <div
                className="kontak mt-32 sm:p-10 p-0"
                data-aos="fade-up"
                data-aos-duration="1000"
                id="kontak">
                <h1 className="text-4xl font-bold mb-2 text-center">Kontak</h1>
                <p className="text-base/loose text-center mb-10 opacity-50">
                    Mari terhubung dengan saya
                </p>
                <form
                    action="https://formsubmit.co/muhamadhendrikbsns@gmail.com"
                    method="POST"
                    className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
                    autoComplete="off">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                name="nama"
                                id="nama"
                                placeholder="Masukan nama lengkap..."
                                className="border border-zinc-500 p-2 rounded-md"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Masukan email..."
                                className="border border-zinc-500 p-2 rounded-md"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="pesan " className="font-semibold">
                                Pesan
                            </label>
                            <textarea
                                type="text"
                                name="pesan"
                                id="pesan"
                                placeholder="Masukan Pesan"
                                className="border border-zinc-500 p-2 rounded-md"
                                cols="45"
                                rows="7"
                                required></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">
                                Kirim Pesan
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* <div className="mt-30"></div> */}
        </>
    );
}

export default App;
