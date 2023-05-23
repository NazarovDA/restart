import requests

import bs4

pages = {
    "https://tdrestart.ru/category/smoli/": "Смолы"
}


for page in pages:

    p = requests.get(page).content

    soup = bs4.BeautifulSoup(p, features="html.parser")

    items = soup.findAll("div", class_="item-thumbnail")

    for item in items:
        try:
            
            item: bs4.Tag = item.find("a")
            link = item.attrs['href']

            name = item.find("img").attrs["alt"]
            print(name)
            obj = requests.get(link).content

            objSoup = bs4.BeautifulSoup(obj, "html.parser")

            shortDesc = objSoup.find(
                "div", class_="short-content-container clearfix")
            fullDesc = objSoup.find("div", class_="full-description")

            t = pages[page]
            requests.post(
                "http://localhost:3000/api/products", json={
                    "name": name,
                    "shortDesc": str(shortDesc),
                    "longDesc": str(fullDesc),
                    "type": t,
                }
            )
        except: ...