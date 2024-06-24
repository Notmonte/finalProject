INSERT INTO pc (name, tower, os_id, processor_id, video_card_id, memory, primary_storage, power_supply, price, imgUrl)
VALUES (
    'iBUYPOWER - AMD Ryzen 5 Starter PC',
    'iBUYPOWER Scale',
    1,
    1,
    1,
    '16GB DDR5-5200MHz RAM',
    '1TB WD M.2 NVMe SSD',
    '600 Watt - High Power 80 PLUS Gold PSU',
    1129.00,
    'https://content.ibuypower.com/cdn-cgi/image/width=640,format=auto,quality=75/https://content.ibuypower.com/Images/Components/27658/gaming-pc-01-Scale-main-2400-solo-(2).png?v=dc7c67dae39cca517cd12a22bc825b264f990836'
);

UPDATE pc 
SET imgUrl = 'pcImg_1.jpg'
WHERE pc_id = 1;

INSERT INTO pc (name, tower, os_id,  processor_id, video_card_id, memory, primary_storage, power_supply, price, imgUrl)
VALUES (
    'CyberPowerPC - Gamer Xtreme Gaming Desktop',
    'CyberPowerPC mid tower',
    1,
    2,
    2,
    '16 gigabytes',
    '2TB SSD - Black',
    'Power Supply Maximum Wattage 850 Watts',
    1249.99,
    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6575/6575073_sd.jpg;maxHeight=2000;maxWidth=2000' 
),

UPDATE pc 
SET imgUrl = 'pcImg_2.png'
WHERE pc_id = 2;

(
    'HP OMEN - 40L Gaming Desktop',
    'HP OMEN tower',
    2,
    3,
    3,
    '16GB DDR5',
    '1TB SSD - Black',
    'Power Supply Maximum Wattage 600 watts',
    1029.99,
    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6554/6554588_sd.jpg;maxHeight=2000;maxWidth=2000'
),

UPDATE pc 
SET imgUrl = 'pcImg_3.jpg'
WHERE pc_id = 3;

(
    'CyberPowerPC - Gamer Supreme Gaming Desktop',
    'CyberPowerPC mid tower',
    2,
    4,
    4,
    '32GB DDR5 SDRAM',
    '2TB SSD - White',
    'Power Supply Maximum Wattage 850 watts',
    1699.99,
    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6575/6575113_sd.jpg;maxHeight=2000;maxWidth=2000'
),

UPDATE pc 
SET imgUrl = 'pcImg_4.jpg'
WHERE pc_id = 4;

(
    'Acer - Predator Orion 5000 Gaming Desktop',
    'Acer stock orion tower',
    2,
    5,
    5,
    '16 GB, DDR5 SDRAM',
    '1 TB SSD',
    'Maximum Power Supply Wattage 800 watts',
    2299.99,
    'https://static-ecpa.acer.com/media/catalog/product/p/r/predator-orion-5000-po5-655-light-on-usbkbms-light-on-01-1000x1000_dg.e42aa.001.png?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg'
),

UPDATE pc 
SET imgUrl = 'pcImg_5.jpg'
WHERE pc_id = 5;

(
    'Acer - Nitro 70 Gaming Desktop',
    'Acer stock nitro tower',
    2,
    6,
    6,
    '32 GB, DDR5 SDRAM',
    '1 TB SSD',
    'Maximum Power Supply Wattage 750W',
    1999.99,
    'https://static-ecpa.acer.com/media/catalog/product/a/c/acer-nitro-70-n70-130-elite-19-rfkbms-light-on-black-01-1000x1000_dg.e3yaa.003.png?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg'
),

UPDATE pc 
SET imgUrl = 'pcImg_6.jpg'
WHERE pc_id = 6;

(
    'Alienware - Aurora R16 Gaming Desktop',
    'Alienware stock Aurora tower',
    2,
    7,
    6,
    '32 GB DDR5',
    '1 TB SSD',
    'Maximum Power Supply Wattage 850W',
    2049.99,
    'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/alienware-desktops/alienware-aurora-r16/media-gallery/liquid/desktop-aw-r16-bk-lqd-cooling-gallery-3.psd?fmt=pjpg&pscan=auto&scl=1&wid=4500&hei=3800&qlt=100,1&resMode=sharp2&size=4500,3800&chrss=full&imwidth=5000'
),

UPDATE pc 
SET imgUrl = 'pcImg_7.jpg'
WHERE pc_id = 7;

(
    'CORSAIR - ONE i500 PC',
    'CORSAIR stock i500 tower',
    3,
    8,
    7,
    '64GB DDR5',
    '2TB M.2 NVMe SSD',
    '1000W SFX 80 PLUS Gold',
    4699.99,
    'https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Corsair-One/i500/gallery/wood-dark/CORSAIR_ONE_i500_WOOD_DARK_01.webp?width=1080&quality=85&auto=webp&format=pjpg'
),

UPDATE pc 
SET imgUrl = 'pcImg_8.jpg'
WHERE pc_id = 8;

(
    'CORSAIR - VENGEANCE i8200 iCUE LINK EDITION Gaming PC',
    'Corsair stock vengeance tower',
    3,
    9,
    7,
    '64GB (2x32GB) DDR5-6400',
    '2TB NVMe SSD',
    '1000W ATX 80 PLUS Gold',
    4499.99,
    'https://m.media-amazon.com/images/I/81qVYZvE5GL.jpg'
),

UPDATE pc 
SET imgUrl = 'pcImg_9.jpg'
WHERE pc_id = 9;

(
    'ASUS - ROG STRIX G16CHR',
    'Asus stcok Strix tower',
    2,
    5,
    8,
    '4x DDR5 U-DIMM slot 16GB DDR5',
    '2TB SATA HDD',
    '850W power supply',
    1499.99,
    'https://dlcdnwebimgs.asus.com/gain/C1BC96E3-4549-4D6E-9EFE-C2B0FE503AF6'
);

UPDATE pc 
SET imgUrl = 'pcImg_10.png'
WHERE pc_id = 10;


INSERT INTO user (fName, lName, email, phone)
VALUES (
    'Demonte',
    'Carter',
    'notmonte8@gmail.com',
    '123-456-7891'
);



INSERT INTO os (os)
VALUES 
    ('windows 11'),
    ('windows 11 home'),
    ('windows 11 pro');


INSERT INTO processor (processor)   -- The ™ Does not work in mysql db, instead it will give you a question mark
VALUES 
    ('AMD Ryzen 5 7600 CPU'),
    ('Intel® Core i7 14th Generation'),
    ('AMD Ryzen 5 7000 Series'),
    ('AMD Ryzen 7 7000 Series'),
    ('Intel® Core i7'),
    ('AMD Ryzen 9'),
    ('13th Gen Intel® Core™ i9'),
    ('INTEL® CORE i9-14900K'),
    ('Intel® Core i9');



INSERT INTO video_card (video_card)
VALUES
    ('Radeon® RX 6500 XT - 4GB'),
    ('NVIDIA® GeForce RTX 4060 Ti'),
    ('NVIDIA® GeForce RTX 4060'),
    ('NVIDIA® GeForce RTX 4070 SUPER 12GB'),
    ('NVIDIA® GeForce RTX 4070 Ti'),
    ('NVIDIA® GeForce RTX 4070'),
    ('NVIDIA® GeForce RTX 4090'),
    ('NVIDIA® GeForce RTX  4080');

