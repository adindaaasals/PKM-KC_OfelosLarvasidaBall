import React from "react";

function Page() {
  return (
    <>
      <div className="pt-40 px-40 mb-14">
        <div className="">
          <h1
            className="text-4xl font-bold text-white text-center italic"
            style={{ fontFamily: "Inter" }}
          >
            LATAR BELAKANG
          </h1>
          <span className="block w-[158px] h-1 bg-white mx-auto my-4"></span>
        </div>
        <div className="flex justify-center">
          <div className="p-12 text-justify bg-white text-black rounded-lg">
            <p className="indent-10">
              Demam Berdarah Dengue (DBD) merupakan sebuah infeksi yang
              diakibatkan oleh arbovirus yang ditularkan melalui perantara
              gigitan nyamuk Aedes aegypti. Menurut data dari kemenkes, kasus
              DBD mengalami peningkatan dari 73.518 kasus pada tahun 2021
              menjadi 125.888 kasus pada tahun 2022. Angka terbesar kasus DBD
              terjadi di perkotaan.
            </p>
            <br />
            <p className="indent-10">
              Hal ini dikarenakan adanya tuntutan profesi serta aktivitas yang
              harus dilakukan di luar rumah. Mayoritas penduduk kota umumnya
              berorientasi pada pekerjaan, sehingga waktu tidak terlalu
              dicurahkan untuk menjaga kebersihan lingkungan yang berakibat pada
              buruknya sistem sanitasi (Depkes RI, 2016).
            </p>
            <br />
            <p className="indent-10">
              Salah satu alat preventif yang dapat mencegah peningkatan DBD
              dalam sanitasi air perkotaan adalah Temephos sebagai alternatif
              obat pembunuh larva nyamuk. Namun, efektivitas dari Temephos
              kurang maksimal karena timbulnya resistensi nyamuk Aedes aegypti.
            </p>
            <br />
            <p className="indent-10">
              {`Hal ini menuntut penambahan dosis penggunaan temephos menjadi > 1 ppm, sedangkan penggunaan diambang batas aman berpotensi menjadikan temephos sebagai bahan B3 yang berdampak pada pencemaran air dan peningkatan toksisitas air.`}
            </p>
            <br />
            <p className="indent-10">
              Ketidakefektifan Temephos dan mobilitas masyarakat yang tinggi
              serta rendahnya kesadaran masyarakat akan sistem sanitasi yang
              baik mendorong untuk memberikan solusi permasalahan melalui
              teknologi terkini. Selama ini, teknologi untuk membasmi larva
              Aedes aegypti belum terintegrasi dengan IoT, maka tim kami membuat
              inovasi berbasis teknologi yaitu alat cerdas mandiri berupa Ofelos
              larvasida ball yang bersifat portable dan terintegrasi IoT untuk
              mengendalikan larva Aedes aegypti di selokan.
            </p>
            <br />
            <p className="indent-10">
              Granula arvasida ball memadukan dua bahan alami yaitu daun
              ciplukan dan kemangi guna mengangkat spesies tanaman lokal daerah
              menjadi lebih multifungsi. Daun ciplukan bekerja dengan mengganggu
              sistem kerja saraf larva dan daun kemangi sebagai agent contact
              poison yang memberikan sensasi terbakar pada kulit larva.
            </p>
            <br />
            <p className="indent-10">
              Ofelos mengkombinasikan teknologi IoT dengan granula dari ekstrak
              spesies tanaman lokal yang dapat membasmi larva nyamuk Aedes
              aegypti.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
