import ItemFoto from "./componentesfacu/ItemFoto";
import "./componentesfacu/Galeria.css"
import React, { useState } from "react";

const GaleriaImagen = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const fotos = [
    {
      id: 1,
      categoria: "Habitaciones",
      fotoPrincipal: {
        src: "https://plus.unsplash.com/premium_photo-1681487479203-464a22302b27?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt:"Habitaciones"
      },
      fotos: [
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-habitaciones/GALERIA_DE_FOTOS_02_HABITACIONES_Hotel-Grand-Sunset-habitaciones4.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-habitaciones/GALERIA_DE_FOTOS_02_HABITACIONES_Hotel-Grand-Sunset-habitaciones3.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-habitaciones/GALERIA_DE_FOTOS_02_HABITACIONES_Hotel-Grand-Sunset-habitaciones2.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-habitaciones/GALERIA_DE_FOTOS_02_HABITACIONES_Hotel-Grand-Sunset-habitaciones7.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-habitaciones/GALERIA_DE_FOTOS_02_HABITACIONES_Hotel-Grand-Sunset-habitaciones5.jpg" },
        { src: "https://images.trvl-media.com/lodging/1000000/430000/425200/425179/596de465.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" },
        { src: "https://images.trvl-media.com/lodging/1000000/430000/425200/425179/6e5293cb.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" },
        { src: "https://images.trvl-media.com/lodging/1000000/430000/425200/425179/3e93523c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" }
      ],
    },
    {
      id: 2,
      categoria: "Eventos",
      fotoPrincipal: {
        src: "https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_1280.jpg",alt:"Eventos"
      },
      fotos: [
        { src: "https://cdn0.bodas.com.mx/vendor/4514/3_2/960/jpg/img-20170725-wa0010_5_84514.jpeg" },
        { src: "https://cdn0.bodas.com.mx/vendor/4282/3_2/640/jpeg/whatsapp-image-2022-10-12-at-1-29-02-pm-2_5_44282-168134657522949.jpeg" },
        { src: "https://www.sofitelbarucalablanca.com/wp-content/uploads/sites/19/2023/09/Weddings2.jpg" },
        { src: "https://cdn0.casamientos.com.ar/vendor/6785/3_2/960/jpg/boda-belen-y-pablo-906_7_166785-165859314750308.jpeg" },
        { src: "https://www.princess-hotels.com/wp-content/uploads/sites/1738/nggallery/inspirate-eventos//Background.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-bodas/boda2.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-bodas/boda6.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-bodas/GALERIA_DE_FOTOS_02_EVENTOS_Hotel-Grand-Sunset-eventos4.jpg" }
      ],
    },
    {
      id: 3,
      categoria: "Exteriores",
      fotoPrincipal: {
        src: "https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_1280.jpg",alt:"Exteriores"
      },
      fotos: [
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-hotel/GALERIA_DE_FOTOS_02_HOTEL_Hotel-Grand-Sunset-hotel1.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-hotel/GALERIA_DE_FOTOS_02_HOTEL_Hotel-Grand-Sunset-hotel13.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-hotel/GALERIA_DE_FOTOS_02_HOTEL_Hotel-Grand-Sunset-hotel12.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-hotel/GALERIA_DE_FOTOS_02_HOTEL_Hotel-Grand-Sunset-hotel10.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-hotel/GALERIA_DE_FOTOS_02_HOTEL_Hotel-Grand-Sunset-hotel8.jpg" }
      ],
    },
    {
      id: 4,
      categoria: "Restaurante",
      fotoPrincipal: {
        src: "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg",alt:"Restaurante"
      },
      fotos: [
        { src: "https://cdn.pixabay.com/photo/2020/06/30/15/03/table-5356682_1280.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-gastro/GALERIA_DE_FOTOS_02_GASTRONOMIA_Hotel-Grand-Sunset-gastronomia6.jpg" },
        { src: "https://cdn.pixabay.com/photo/2020/03/21/04/00/shrimp-4952607_1280.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-gastro/GALERIA_DE_FOTOS_02_GASTRONOMIA_Hotel-Grand-Sunset-gastronomia4.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-gastro/GALERIA_DE_FOTOS_02_GASTRONOMIA_Hotel-Grand-Sunset-gastronomia20.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-gastro/GALERIA_DE_FOTOS_02_GASTRONOMIA_Hotel-Grand-Sunset-gastronomia19.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-gastro/GALERIA_DE_FOTOS_02_GASTRONOMIA_Hotel-Grand-Sunset-gastronomia16.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-gastro/GALERIA_DE_FOTOS_02_GASTRONOMIA_Hotel-Grand-Sunset-gastronomia14.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/gallery-gastro/GALERIA_DE_FOTOS_02_GASTRONOMIA_Hotel-Grand-Sunset-gastronomia11.jpg" }
      ],
    },
    {
      id: 5,
      categoria: "Recreacion",
      fotoPrincipal: {
        src: "https://t2.uc.ltmcdn.com/es/posts/5/2/3/tirar_de_la_cuerda_52325_7_600.jpg",alt:"Recreacion"
      },
      fotos: [
        { src: "https://t2.uc.ltmcdn.com/es/posts/5/2/3/balon_prisionero_52325_3_600.webp" },
        { src: "https://t1.uc.ltmcdn.com/es/posts/5/2/3/el_tesoro_52325_6_600.webp" },
        { src: "https://t2.uc.ltmcdn.com/es/posts/5/2/3/guerra_de_bolas_52325_4_600.webp" },
        { src: "https://blogdelhotel.wordpress.com/wp-content/uploads/2015/07/spring-bitacora-hotel-xg0_2983.jpg" },
        { src: "https://elpuertoactualidad.es/wp-content/uploads/2019/08/animacion-fb.jpg" },
        { src: "https://static.hosteltur.com/app/public/uploads/img/articles/2019/07/17/L_133434_l-010411-riu-pool-party-jungle-2.jpg" },
        { src: "https://media.licdn.com/dms/image/D4E12AQFDJmLwYsJP1A/article-cover_image-shrink_720_1280/0/1709805719319?e=2147483647&v=beta&t=FQzco10StAmm04lq-5KvhCx0JUcFuN38uXqw_Z8Di5c" }
      ],
    },
    {
      id: 7,
      categoria: "Piscina",
      fotoPrincipal: {
        src: "https://s2.abcstatics.com/abc/www/multimedia/viajar/2024/06/26/08-daia-conil-piscina-04-RYUK2nnTBMBM9r4gi3EoiVO-1200x840@diario_abc.jpg",alt:"Piletas"
      },
      fotos: [
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/services/PISCINAS_02_GALERIA_Hotel-Grand-Sunset-piscina2.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/services/PISCINAS_02_GALERIA_Hotel-Grand-Sunset-piscina3.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/services/PISCINAS_02_GALERIA_Hotel-Grand-Sunset-piscina-villas.jpg" },
        { src: "https://www.hotelgrandsunsetprincess.com/wp-content/uploads/1977/1904/nggallery/services/PISCINAS_02_GALERIA_Hotel-Grand-Sunset-piscina8.jpg" },
        { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/5d/bc/43/castelli-hotel.jpg?w=700&h=-1&s=1" },
        { src: "https://www.cadenadial.com/wp-content/uploads/2021/06/piscinas-de-hoteles-436x291.jpg" },
        { src: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/HFYVL6LEY5OJXCDIUFZ3IR4NLA.jpg" },
        { src: "https://phantom-telva.unidadeditorial.es/3f30552f7f431de88607ad88b3c8892d/crop/0x99/1000x661/resize/828/f/jpg/assets/multimedia/imagenes/2019/07/18/15634544135437.jpg" }
      ],
    },
    {
      id: 8,
      categoria: "Terraza",
      fotoPrincipal: {
        src: "https://live.staticflickr.com/8166/7313617034_e2de794c1e_b.jpg",alt:"Terrazas"
      },
      fotos: [
        { src: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/660/HPL-APRIL-31-1.jpg" },
        { src: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/660/HPL-APRIL-11-2.jpg" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_6eEn9cJ0QuVHPSKA9nXwZWFQardX2TD_Rpz1ux-O7s72MK95LvQS6QH_2FlEuHgU90&usqp=CAU" },
        { src: "https://media-cdn.tripadvisor.com/media/photo-s/10/ba/df/61/terraza-chill-out-april.jpg" },
        { src: "https://media-cdn.tripadvisor.com/media/photo-s/10/ba/de/da/terraza-chill-out-april.jpg" }
      ],
    },
  ];

  const Click = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <div className="Informacion">
      <section className="mb-3 py-md-5 py-sm-2 container-fluid fondo">
        <h3 className="fs-2 text-center text-white container">Galeria de Imagenes</h3>
      </section>

      <section className="container my-3 py-3">
        <div className="row justify-content-around">
          {!categoriaSeleccionada ? (
            fotos.map((categoria) => (
              <div key={categoria.id} className="col-10 col-md-6 col-lg-4 my-2 py-2 foto">
                <h5>{categoria.categoria}</h5>
                <img
                  src={categoria.fotoPrincipal.src}
                  alt={categoria.categoria}
                  className="img-fluid rounded foto"
                  onClick={() => Click(categoria)}
                />
              </div>
            ))
          ) : (
            <ItemFoto
              categoria={categoriaSeleccionada.categoria}
              fotos={categoriaSeleccionada.fotos}
              setCategoriaSeleccionada={setCategoriaSeleccionada}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default GaleriaImagen;
