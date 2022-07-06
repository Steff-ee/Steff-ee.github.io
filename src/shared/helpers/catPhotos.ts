
export const pixelPhotos: string[] = [
    'https://i.imgur.com/bycAEi5.jpg',
    'https://i.imgur.com/6QAlEpa.jpeg',
    'https://i.imgur.com/5F4wUM7.jpg',
    'https://i.imgur.com/XzmAuLH.jpg',
    'https://i.imgur.com/ABE7Aji.jpg',
    'https://i.imgur.com/ihsiVub.jpg',
    'https://i.imgur.com/pz3QdzG.jpg',
    'https://i.imgur.com/ucw7Mv0.jpg',
    'https://i.imgur.com/Tq0mfwC.jpg',
    'https://i.imgur.com/nZUCBZG.jpg',
    'https://i.imgur.com/WVXCjS5.jpg',
    'https://i.imgur.com/3ZIjAfQ.jpg',
    'https://i.imgur.com/YQgC8oQ.jpg',
    'https://i.imgur.com/G32hYw0.jpg',
    'https://i.imgur.com/sClD0gj.jpg',
    'https://i.imgur.com/PPo4bha.jpg',
    'https://i.imgur.com/ecmVJQA.jpg',
    'https://i.imgur.com/SShTLUw.jpg',
    'https://i.imgur.com/dxovXzd.jpg',
]

export const hexelPhotos: string[] = [
    'https://i.imgur.com/kRwrMXT.jpg',
    'https://i.imgur.com/jitypxe.jpg',
    'https://i.imgur.com/goD60MH.jpg',
    'https://i.imgur.com/uamUq8L.jpg',
    'https://i.imgur.com/Nw40bE5.jpg',
    'https://i.imgur.com/bvivaA2.jpg',
    'https://i.imgur.com/L6BpcWO.jpg',
    'https://i.imgur.com/MMsuciB.jpg',
    'https://i.imgur.com/nFeYUB9.jpg',
    'https://i.imgur.com/PqzxUfm.jpg',
    'https://i.imgur.com/BNmUAlN.jpg',
    'https://i.imgur.com/iJHnd2f.jpg',
    'https://i.imgur.com/L1wUWqD.jpg',
    'https://i.imgur.com/GeRfqKX.jpg',
    'https://i.imgur.com/hMK7LyD.jpg',
    'https://i.imgur.com/fkTeD5s.jpg',
    'https://i.imgur.com/oybsySR.jpg',
]

export const bothCatsPhotos: string[] = [
    'https://i.imgur.com/L0e1R4v.jpg',
    'https://i.imgur.com/DZxpqi9.jpg',
    'https://i.imgur.com/0znqdCs.jpg',
    'https://i.imgur.com/sCJkBMa.jpg',
    'https://i.imgur.com/n3kFng7.jpg',
    'https://i.imgur.com/XEywAzR.jpg',
    'https://i.imgur.com/VgTRS3r.jpg',
    'https://i.imgur.com/R2h3nuQ.jpg',
    'https://i.imgur.com/IG9KXSb.jpg',
    'https://i.imgur.com/i4uyozh.jpg',
    'https://i.imgur.com/x6wPBdh.jpg',
    'https://i.imgur.com/mjbzRda.jpg',
    'https://i.imgur.com/QrdshsO.jpg',
    'https://i.imgur.com/cRBaTU0.jpg',
    'https://i.imgur.com/RuCDnar.jpg',
    'https://i.imgur.com/YHGiHMY.jpg',
    'https://i.imgur.com/tMapPpt.jpg',
    'https://i.imgur.com/3yjhBhj.jpg',
    'https://i.imgur.com/IWs1C1y.jpg',
    'https://i.imgur.com/hplJZs6.jpg',
    'https://i.imgur.com/Cq1TgaN.jpg',
    'https://i.imgur.com/hNLRR8Q.jpg',
    'https://i.imgur.com/1ZIRZwS.jpg',
    'https://i.imgur.com/DNJo0zr.jpg',
    'https://i.imgur.com/s11eIMg.jpg',
    'https://i.imgur.com/82LbGxU.jpg',
]

const photos: string[] = []
let idx = 0
while (idx < pixelPhotos.length || idx < hexelPhotos.length || idx < bothCatsPhotos.length) {
    photos.push(pixelPhotos[idx])
    photos.push(hexelPhotos[idx])
    photos.push(bothCatsPhotos[idx])
    idx++
}

export const catPhotos = photos.filter(p => !!p)