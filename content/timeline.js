/* ==========================================================================
   SOUTH-VIEW TIMELINE — CONTENT FILE
   --------------------------------------------------------------------------
   This is the only file you need to edit to add, remove, or change timeline
   entries. Keep the existing commas, quotation marks and brackets in place.
   Write years as numbers, without quotation marks.

   ADD AN ENTRY
   1. Find a complete entry below, from its opening { to its closing },.
      Copy it and paste the copy beside the other entries.
   2. Replace the name, year, headline, story and connection to South-View.
      Replace the source names and website addresses with your sources.
   3. Give the copy its own short link name on the line labeled id, such as
      'new-person'. Use lowercase letters and dashes, with no spaces.
   4. For a picture, put the image in assets/images/archive/. In the copied
      entry, replace the old picture's filename with yours. Add a short
      picture description, caption and the name and website of its owner.
      If you have no picture yet, leave the picture's address empty ('').
      The page will show an "archival image needed" box.
   5. Save this file and refresh the website. Check the date, wording,
      picture and links. The page puts entries in year order for you.

   REMOVE AN ENTRY   delete its whole entry, from { through the closing },.

   Entry fields (they mirror our research template):
     id            unique, lowercase-with-dashes; also the link anchor
                   (…/index.html#ludie-clay-andrews jumps straight to it)
     year          number — places the entry on the timeline and sets the
                   skyline to that year
     date          optional display date ("November 1863", "c. 1900")
     period        optional: "prologue" | "founding" | "civil-rights" |
                   "legacy" (otherwise worked out from the year)
     person        name(s) the entry is about
     title         short headline
     description   what happened
     whyItBelongs  the connection to South-View (shown under the heading
                   "Connection to South-View")
     media         { type, src, alt, caption, credit, creditUrl, suggestion }
                   type: "Historical photograph", "Historical illustration",
                   "Historical interview", "Document", …
     sources       list of { label, url }
     focus         optional: point the skyline camera at a landmark —
                   "railroad", "capitol", "kimball-house", "auc", "grady",
                   "sweet-auburn", "ebenezer", "fulton-county-stadium",
                   "turner-field", "georgia-dome", "downtown", "midtown",
                   "skyline", "south-view"
     status        "researched" (team-verified) | "draft" (sourced, needs
                   team review) | "placeholder" (research still needed)
     note          internal note for the team — never shown on the page
   ========================================================================== */

window.SOUTHVIEW_CONTENT = {
  site: {
    "title": "South-View",
    "kicker": "An illustrated history of Black Atlanta",
    "dek": "Black Atlantans founded South-View Cemetery in 1886 in response to discrimination at the city’s segregated burial grounds. (Georgia Historical Society) This timeline follows people connected to the cemetery and their work in Atlanta, from the Civil War to the present. The changing skyline accompanies the lives of ministers, nurses, business owners, athletes and organizers whose stories appear along the way.",
    "startYear": 1860,
    "endYear": 2026,
    "showStatusLabels": false,
    "finale": {
      "title": "The view from South-View",
      "text": "South-View continues to serve Atlanta as an active cemetery, with graves that record generations of family, religious and civic life. (Georgia Historical Society) The people in this timeline are among the many remembered there, from the cemetery’s founders to educators, business owners and civil rights leaders. (Royster and Mehta) Their histories remain part of a place where families continue to bury and remember their relatives. (Georgia Historical Society)",
      "address": "South-View Cemetery · 1990 Jonesboro Road SE, Atlanta, Georgia",
      "sources": [
        {
          "label": "Sources: Georgia Historical Society · South-View Cemetery · Georgia Historical Marker Program · 2016",
          "url": "https://www.georgiahistory.com/ghmi_marker_updated/south-view-cemetery/"
        },
        {
          "label": "Jacqueline Jones Royster and Prachi Mehta · South-View Cemetery: The Oldest African American Controlled Burial Ground in Atlanta, Georgia · Building Memories, Georgia Tech",
          "url": "https://leading-edge.iac.gatech.edu/building-memories/southview-cemetery/"
        },
        {
          "label": "Stephen Ward Angell · Henry McNeal Turner · New Georgia Encyclopedia · 2002",
          "url": "https://www.georgiaencyclopedia.org/articles/arts-culture/henry-mcneal-turner-1834-1915/"
        },
        {
          "label": "South-View Cemetery Association · Our History",
          "url": "https://southviewcemetery.com/our-history/"
        },
        {
          "label": "Edward A. Hatfield · William Holmes Borders · New Georgia Encyclopedia · 2007",
          "url": "https://www.georgiaencyclopedia.org/articles/arts-culture/william-holmes-borders-1905-1993/"
        },
        {
          "label": "Kerrie Cotten Williams · Annie L. McPheeters · New Georgia Encyclopedia · 2010",
          "url": "https://www.georgiaencyclopedia.org/articles/education/annie-l-mcpheeters-1908-1994/"
        },
        {
          "label": "Matthew Bailey · John Wesley Dobbs · New Georgia Encyclopedia · 2005",
          "url": "https://www.georgiaencyclopedia.org/articles/history-archaeology/john-wesley-dobbs-1882-1961/"
        },
        {
          "label": "Atlanta Department of City Planning · Civil Rights Cemetery Tour · Atlanta Cemetery Network · 2022",
          "url": "https://static1.squarespace.com/static/5e6fd72f1f7dae1c021471b9/t/62e2e28cc36da05fea948c4b/1659036304775/Civil%2BRights%2BCemetery%2BTour.pdf"
        },
        {
          "label": "Elizabeth Clappin · Promised Land: A Tour of Atlanta’s Historically African American Cemeteries and the Graves of Civil Rights Pioneers · Atlanta Department of City Planning · 2022",
          "url": "https://citydesign.atlantaga.gov/blog/2022/7/28/promised-land-a-tour-of-atlantas-historically-african-american-cemeteries-and-the-graves-of-civil-rights-pioneers"
        },
        {
          "label": "National Park Service · Weekly List 2026 07 10 · National Register of Historic Places · 2026",
          "url": "https://home.nps.gov/subjects/nationalregister/weekly-list-2026-07-10.htm"
        },
        {
          "label": "William Harris Bragg · Reconstruction in Georgia · New Georgia Encyclopedia · 2005",
          "url": "https://www.georgiaencyclopedia.org/articles/history-archaeology/reconstruction-in-georgia/"
        }
      ]
    },
    "credits": {
      "course": "LMC 3403 · Georgia Tech · Fall 2026",
      "team": "Mickey Paulus · Rick Berglund · Sunny Lin · Vaishnavi Manivannan",
      "note": "Last updated: November 11, 2026. The illustrated skyline is an artistic interpretation, with approximate positions and building dates."
    }
  },

  periods: [
    {
      "id": "prologue",
      "number": "Prologue",
      "title": "Before South-View",
      "years": "1863–1885",
      "start": 1860,
      "end": 1885.9,
      "intro": "After the Civil War, formerly enslaved Georgians built churches, schools and businesses while seeking political rights during Reconstruction. (Bragg) Henry McNeal Turner helped organize Georgia’s Republican Party and was elected to the state legislature, where white lawmakers expelled him and other Black members in 1868; they regained their seats in 1870. (Angell; Bragg) Those struggles formed part of the background to South-View, whose founders later organized a cemetery that Black Atlantans could own and manage. (Royster and Mehta)",
      "status": "draft"
    },
    {
      "id": "Hello",
      "number": "Prologue",
      "title": "Cat",
      "years": "1863–1885",
      "start": 1860,
      "end": 1885.9,
      "intro": "After the Civil War, formerly enslaved Georgians built churches, schools and businesses while seeking political rights during Reconstruction. (Bragg) Henry McNeal Turner helped organize Georgia’s Republican Party and was elected to the state legislature, where white lawmakers expelled him and other Black members in 1868; they regained their seats in 1870. (Angell; Bragg) Those struggles formed part of the background to South-View, whose founders later organized a cemetery that Black Atlantans could own and manage. (Royster and Mehta)",
      "status": "draft"
    },
    {
      "id": "founding",
      "number": "Part I",
      "title": "Founding and early history",
      "years": "1886–1949",
      "start": 1886,
      "end": 1949.9,
      "intro": "In February 1886, Black Atlantans petitioned for a cemetery where families could bury their relatives without the restrictions imposed at the city’s segregated burial grounds. (South-View Cemetery Association) South-View Cemetery Association received its charter on April 21, 1886, as a stockholder corporation, with Robert Grant, Albert Watts, Jacob McKinley, George W. Graham, Charles Henry Morgan and John D. Render among its organizers. (Royster and Mehta) The cemetery began with 25 acres and was open to people regardless of race. (Georgia Historical Society; Royster and Mehta)",
      "status": "draft"
    },
    {
      "id": "civil-rights",
      "number": "Part II",
      "title": "The Civil Rights Movement",
      "years": "1950–1969",
      "start": 1950,
      "end": 1969.9,
      "intro": "Atlanta’s civil rights campaigns included bus protests, library desegregation and voter organizing. (Hatfield; Williams; Bailey) South-View’s burials include people who led that work, among them William Holmes Borders and Grace Towns Hamilton. (Atlanta Department of City Planning; Royster and Mehta)",
      "status": "draft"
    },
    {
      "id": "legacy",
      "number": "Part III",
      "title": "After 1970",
      "years": "1970–2026",
      "start": 1970,
      "end": 2026,
      "intro": "South-View became the burial place of John Lewis and Hank Aaron, alongside earlier generations of Atlanta leaders. (Clappin) In 2026, the cemetery was listed on the National Register of Historic Places. (National Park Service)",
      "status": "draft"
    }
  ],

  entries: [
    {
      "id": "henry-mcneal-turner",
      "year": 1863,
      "date": "1863",
      "period": "prologue",
      "person": "Henry McNeal Turner",
      "title": "Henry McNeal Turner served as an Army chaplain",
      "description": "In 1863, Henry McNeal Turner helped organize the First Regiment of United States Colored Troops and served as its chaplain during the Civil War. (Angell) After the war, he organized African Methodist Episcopal congregations in Georgia, helped establish the state’s Republican Party and served in its constitutional convention. (Angell) Elected to the Georgia House during Reconstruction, he was among the Black legislators expelled by their white colleagues in 1868 and restored to office in 1870. (Angell; Bragg)",
      "whyItBelongs": "Turner later became an AME bishop and was buried at South-View, where the historical marker names his work during Reconstruction and in the church. (Angell; Georgia Historical Society) His life connects the cemetery to the political organizing and church building that followed emancipation, decades before the modern Civil Rights Movement. (Angell)",
      "media": {
        "type": "Historical illustration",
        "src": "assets/images/archive/henry-mcneal-turner-1863.jpg",
        "width": 666,
        "height": 860,
        "alt": "Engraved portrait of Rev. Henry McNeal Turner in a dark coat and white cravat, captioned “Rev. H. M. Turner, Chaplain First United States Colored Regiment.”",
        "caption": "Henry McNeal Turner as an Army chaplain, 1863.",
        "credit": "Library of Congress, Prints and Photographs Division · public domain",
        "creditUrl": "https://www.loc.gov/item/2009630222"
      },
      "sources": [
        {
          "label": "Sources: Stephen Ward Angell · Henry McNeal Turner · New Georgia Encyclopedia · 2002",
          "url": "https://www.georgiaencyclopedia.org/articles/arts-culture/henry-mcneal-turner-1834-1915/"
        },
        {
          "label": "Georgia Historical Society · South-View Cemetery · Georgia Historical Marker Program · 2016",
          "url": "https://www.georgiahistory.com/ghmi_marker_updated/south-view-cemetery/"
        },
        {
          "label": "William Harris Bragg · Reconstruction in Georgia · New Georgia Encyclopedia · 2005",
          "url": "https://www.georgiaencyclopedia.org/articles/history-archaeology/reconstruction-in-georgia/"
        }
      ],
      "focus": "railroad",
      "status": "researched",
      "note": "Project 2 information sheet review: Matched the Reconstruction account on pages 2–3: expulsion in 1868 and reinstatement in 1870. The 1863 timeline date refers to his Army chaplaincy, a separate event."
    },
    {
      "id": "robert-grant",
      "year": 1886,
      "date": "April 21, 1886",
      "person": "Robert Grant",
      "title": "Robert Grant helped establish South-View",
      "description": "Robert Grant was an Atlanta blacksmith, businessman and minister who helped establish South-View Cemetery in 1886. (Historic South-View Preservation Foundation; South-View Cemetery Association) In 1872, he and other members of Friendship Baptist Church founded Zion Hill Baptist Church, first meeting in a brush arbor near their homes. (Zion Hill Baptist Church) Grant later joined other local organizers in creating a cemetery at a time when Black families faced discrimination at Atlanta’s existing burial grounds. (Georgia Historical Society)",
      "whyItBelongs": "South-View’s organizers sought a place where those families could bury their relatives without the restrictions imposed at segregated cemeteries. (Georgia Historical Society) Grant was among the signers of the association’s charter, granted on April 21, 1886, making him part of the cemetery’s founding as well as its surrounding church community. (Royster and Mehta)",
      "media": {
        "type": "Historical portrait",
        "src": "assets/images/archive/robert-grant.jpg",
        "width": 305,
        "height": 404,
        "alt": "Engraved portrait of Robert Grant, a bearded man in a suit and tie.",
        "caption": "Robert Grant, in an undated engraved portrait.",
        "credit": "Courtesy of Zion Hill Baptist Church Archives",
        "creditUrl": "https://www.southviewpreservation.com/robertgrant"
      },
      "sources": [
        {
          "label": "Sources: Historic South-View Preservation Foundation · Robert Grant",
          "url": "https://www.southviewpreservation.com/robertgrant"
        },
        {
          "label": "South-View Cemetery Association · Our History",
          "url": "https://southviewcemetery.com/our-history/"
        },
        {
          "label": "Zion Hill Baptist Church · A Brief History of Zion Hill Baptist Church, 1872–2023 · 2023",
          "url": "https://www.zionhill.org/historyarchive"
        },
        {
          "label": "Georgia Historical Society · Georgia Historical Society to Recognize South-View Cemetery with Historical Marker Dedication this Saturday · 2016",
          "url": "https://www.georgiahistory.com/georgia-historical-society-to-recognize-south-view-cemetery-with-historical-marker-dedication-this-saturday/"
        },
        {
          "label": "Jacqueline Jones Royster and Prachi Mehta · South-View Cemetery: The Oldest African American Controlled Burial Ground in Atlanta, Georgia · Building Memories, Georgia Tech",
          "url": "https://leading-edge.iac.gatech.edu/building-memories/southview-cemetery/"
        }
      ],
      "focus": "south-view",
      "status": "researched",
      "note": "The South-View Preservation Foundation displays this portrait with a courtesy credit to Zion Hill Baptist Church Archives. Its original publication date and permission for reuse on this timeline remain unconfirmed; do not describe it as public domain or freely licensed. Project 2 information sheet review: The church founding year, 1872, matches pages 2–4 and 28; the cemetery founding year, 1886, also agrees. The exact charter date is documented by Building Memories. The date displayed on this card is the cemetery charter, not the church founding."
    },
    {
      "id": "alonzo-herndon",
      "year": 1905,
      "date": "1905",
      "person": "Alonzo Franklin Herndon",
      "title": "Alonzo Herndon entered the insurance business",
      "description": "Born into slavery in Walton County on June 26, 1858, Alonzo Franklin Herndon became an Atlanta barber, property owner and insurance businessman. (Henderson) In 1905, he purchased a mutual aid association and incorporated it as the Atlanta Mutual Insurance Association, which became the Atlanta Life Insurance Company in 1922. (Henderson) During the 1906 Atlanta Race Massacre, a white mob smashed his Peachtree Street barbershop’s windows, but Herndon had already gone home and escaped injury. (Henderson)",
      "whyItBelongs": "Herndon supported schools, churches, charitable organizations and the South-View Cemetery Association, making the cemetery one of the local institutions in which he invested. (Henderson) He was buried at South-View, and the cemetery’s historical marker identifies him as the founder of Atlanta Life. (Georgia Historical Society)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/alonzo-herndon-c1900.jpg",
        "width": 799,
        "height": 1024,
        "alt": "Black-and-white studio portrait of Alonzo Herndon wearing round spectacles, a dark suit and a patterned tie.",
        "caption": "Alonzo Herndon, c. 1900.",
        "credit": "Atlanta University Center Robert W. Woodruff Library, via the Digital Library of Georgia · educational use permitted",
        "creditUrl": "https://dlg.usg.edu/record/auu_auc-001_auc-001-1139"
      },
      "sources": [
        {
          "label": "Sources: Alexa Benson Henderson · Alonzo Herndon · New Georgia Encyclopedia · 2004",
          "url": "https://www.georgiaencyclopedia.org/articles/business-economy/alonzo-herndon-1858-1927/"
        },
        {
          "label": "Georgia Historical Society · South-View Cemetery · Georgia Historical Marker Program · 2016",
          "url": "https://www.georgiahistory.com/ghmi_marker_updated/south-view-cemetery/"
        }
      ],
      "focus": "sweet-auburn",
      "status": "researched",
      "note": "Project 2 information sheet review: Birth date matches article E026 on page 40. The barbershop attack matches pages 14 and 16 and the New Georgia Encyclopedia account. Page 33 adds claims about a named employee and the shop’s opening date that were not independently confirmed here; those were not added. The 1905 purchase and 1922 company name are separate milestones."
    },
    {
      "id": "ludie-clay-andrews",
      "year": 1920,
      "date": "1920",
      "person": "Ludie Clay Andrews",
      "title": "Ludie Clay Andrews became a registered nurse",
      "description": "After graduating from Spelman’s nursing program in 1906, Ludie Clay Andrews helped organize the Grady Municipal Training School for Colored Nurses in Atlanta in 1914. (Georgia Women of Achievement) She spent years challenging restrictions on state registration for Black nurses, refusing a license offered only to her and taking legal action on behalf of other qualified nurses. (Georgia Women of Achievement) In 1920, Black graduates of accredited nursing schools in Georgia could take the state registration examination, and Andrews became Georgia’s first Black registered nurse. (Georgia Women of Achievement)",
      "whyItBelongs": "Andrews later supervised care at the Morehouse-Spelman-Atlanta University Infirmary, continuing her work in nursing and education. (Georgia Women of Achievement) She was buried at South-View after her death in 1969, connecting the cemetery to the campaign for professional recognition for Black nurses. (Georgia Women of Achievement)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/ludie-clay-andrews-yearbook-1951.jpg",
        "width": 314,
        "height": 405,
        "alt": "Black-and-white portrait of Ludie Clay Andrews wearing a dark dress and pearl necklace, looking down at a booklet in her hands.",
        "caption": "Ludie Clay Andrews in the nursing school’s 1951 yearbook, decades after her campaign for state registration.",
        "credit": "Nightingale (1951), p. 7, Georgia State University Library, via Georgia Public Library Service · educational use permitted; cropped",
        "creditUrl": "https://georgialibraries.omeka.net/s/central-state-hospital/item/793"
      },
      "sources": [
        {
          "label": "Sources: Georgia Women of Achievement · Ludie Clay Andrews",
          "url": "https://www.georgiawomen.org/ludie-clay-andrews"
        }
      ],
      "focus": "grady",
      "status": "researched",
      "note": "Project 2 information sheet review: Pages 38–40 agree on the 1914 training school and 1920 state registration. The sheet lists a birth year of 1875, while Georgia Women of Achievement gives September 4, 1872. The birth date remains omitted from the public entry pending stronger evidence; do not silently treat either as established."
    },
    {
      "id": "david-t-howard",
      "year": 1924,
      "date": "1924",
      "period": "founding",
      "person": "David Tobias Howard",
      "title": "A school opened on David T. Howard’s land",
      "description": "Born into slavery in Georgia in 1849, David Tobias Howard worked as a railroad porter before establishing an undertaking business in Atlanta. (Atlanta Public Schools) He donated the seven-and-a-half-acre site for a school serving Black children in the Old Fourth Ward, which opened in 1924 and was named for him. (Smith) Its students included Martin Luther King Jr., who attended from 1936 to 1940, as well as several other future Atlanta civic and business leaders. (Smith)",
      "whyItBelongs": "Howard served on the South-View Cemetery Association’s board as well as supporting Black education in Atlanta, and he died in 1935. (Royster and Mehta; Atlanta Public Schools) King’s later burial at South-View in 1968 provides another connection between the school’s history and the cemetery. (National Park Service)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/david-t-howard-family-c1900.jpg",
        "width": 640,
        "height": 515,
        "alt": "David Tobias Howard, his mother Fannie Howard and his wife Ella Branner Howard seated in a horse-drawn carriage in Atlanta, with a house in the background.",
        "caption": "David Tobias Howard with his mother, Fannie Howard, and his wife, Ella Branner Howard, about 1899–1900. The photograph predates the school’s opening.",
        "credit": "Library of Congress, Prints and Photographs Division · public domain",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:David_Tobias_Howard,_an_undertaker,_his_mother,_and_wife,_Atlanta,_Georgia;_seated_in_a_horse-drawn_carriage_with_tree-shaded_house_in_background_LCCN99472385.jpg"
      },
      "sources": [
        {
          "label": "Sources: Jacqueline Jones Royster and Prachi Mehta · South-View Cemetery: The Oldest African American Controlled Burial Ground in Atlanta, Georgia · Building Memories, Georgia Tech",
          "url": "https://leading-edge.iac.gatech.edu/building-memories/southview-cemetery/"
        },
        {
          "label": "Jere Smith · Howard Middle School Building Stands Ready for Its Second Century · Construction Owners Association of America · 2021",
          "url": "https://www.coaa.org/resources/howard-middle-school-building-stands-ready-for-its-second-century"
        },
        {
          "label": "National Park Service · A Strong and Enduring Acknowledgment · Martin Luther King, Jr. National Historical Park · 2020",
          "url": "https://www.nps.gov/malu/a-strong-and-enduring-acknowledgment.htm"
        },
        {
          "label": "Atlanta Public Schools · Atlanta Public Schools Announces Partnership with PUMA, David T. Howard High School Alumni Association · APS Today · 2017",
          "url": "https://apstoday.us/2017/02/08/atlanta-public-schools-announces-partnership-with-puma-david-t-howard-high-school-alumni-association/"
        }
      ],
      "focus": "sweet-auburn",
      "status": "researched",
      "note": "Project 2 information sheet review: The sheet contradicts itself: page 35 gives 1819, while pages 30 and 40 give 1849. Atlanta Public Schools independently confirms 1849 and death in 1935. The sheet’s December 10 birthday was not independently established by that source, so only the supported birth year is used. The 1924 date on this card is the school opening, not Howard’s birth. Building Memories explicitly lists him among the cemetery association’s board members."
    },
    {
      "id": "john-wesley-dobbs",
      "year": 1939,
      "date": "December 2, 1939",
      "person": "John Wesley Dobbs",
      "title": "John Wesley Dobbs recorded his life story",
      "description": "John Wesley Dobbs worked as a railway mail clerk while becoming an organizer for Black voting rights in Atlanta. (Bailey) He founded the Atlanta Civic and Political League in 1936 and later helped establish the Atlanta Negro Voters League, using churches, Masonic halls and public meetings to encourage voter registration. (Bailey) In a Federal Writers’ Project interview on December 2, 1939, he described his childhood, education and working life in his own words. (Tensill)",
      "whyItBelongs": "During the 1906 Atlanta Race Massacre, Dobbs watched a white mob approach the Auburn Avenue home where he lived before it turned away. (Moffson) He died on August 30, 1961, the day Atlanta’s public schools desegregated, and was buried at South-View. (Bailey; Royster and Mehta) His grandson, Maynard Holbrook Jackson Jr., became Atlanta’s first Black mayor in 1973. (Today in Georgia History)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/john-wesley-dobbs.jpg",
        "width": 700,
        "height": 1024,
        "alt": "Black-and-white portrait of John Wesley Dobbs in a dark three-piece suit with a polka-dot tie and pocket square.",
        "caption": "John Wesley Dobbs, about 1950. The portrait was made after the interview described here.",
        "credit": "AJCP387-098a, Atlanta Journal-Constitution Photographic Archives, Georgia State University Library · educational use permitted",
        "creditUrl": "https://dlg.usg.edu/record/gsu_ajc_7236"
      },
      "sources": [
        {
          "label": "Sources: Matthew Bailey · John Wesley Dobbs · New Georgia Encyclopedia · 2005",
          "url": "https://www.georgiaencyclopedia.org/articles/history-archaeology/john-wesley-dobbs-1882-1961/"
        },
        {
          "label": "Geneva Tensill · John Wesley Dobbs: I Saw the Stars · Federal Writers’ Project, Library of Congress · 1939",
          "url": "https://tile.loc.gov/storage-services/service/mss/wpalh/wpalh-13070415/wpalh-13070415.pdf"
        },
        {
          "label": "Jacqueline Jones Royster and Prachi Mehta · South-View Cemetery: The Oldest African American Controlled Burial Ground in Atlanta, Georgia · Building Memories, Georgia Tech",
          "url": "https://leading-edge.iac.gatech.edu/building-memories/southview-cemetery/"
        },
        {
          "label": "Georgia Historical Society and Georgia Public Broadcasting · Maynard Jackson Elected · Today in Georgia History",
          "url": "https://www.todayingeorgiahistory.org/tih-georgia-day/maynard-jackson-elected/"
        },
        {
          "label": "Steven H. Moffson · Martin Luther King, Jr., Historic District Boundary Increase and Additional Documentation, section 8, page 36 · Georgia Department of Natural Resources, National Register of Historic Places · 2001",
          "url": "https://npgallery.nps.gov/NRHP/GetAsset/aed2eed0-43c2-4073-b83b-1277caacc2c9"
        }
      ],
      "focus": "sweet-auburn",
      "status": "researched",
      "note": "Project 2 information sheet review: The 1906 household account on page 34 is supported in the National Register district documentation, section 8, page 36. The exact death date matches article E035 on page 40 and New Georgia Encyclopedia. The December 2, 1939 card date remains the date of his interview."
    },
    {
      "id": "william-holmes-borders",
      "year": 1957,
      "date": "January 9, 1957",
      "person": "William Holmes Borders",
      "title": "William Holmes Borders challenged bus segregation",
      "description": "On January 9, 1957, William Holmes Borders and five other Black ministers took seats at the front of a segregated Atlanta bus as part of the Love, Law, and Liberation campaign. (Hatfield) The organizers arranged a peaceful arrest to challenge segregation through the courts, and Atlanta’s buses were desegregated in 1959. (Hatfield) As pastor of Wheat Street Baptist Church, Borders also organized services for his congregation, including a credit union, employment assistance and a medical clinic. (Hatfield)",
      "whyItBelongs": "Borders was buried at South-View, where the Atlanta Cemetery Network’s civil rights tour includes his grave. (Atlanta Department of City Planning) His work joined the city’s church life to campaigns for access to public transportation and other basic services. (Hatfield)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/william-holmes-borders-bus-1957.jpg",
        "width": 1200,
        "height": 780,
        "alt": "Black ministers seated at the front of an Atlanta bus during the protest led by William Holmes Borders, with onlookers outside the windows.",
        "caption": "William Holmes Borders and other ministers seated at the front of an Atlanta bus, January 9, 1957.",
        "credit": "Atlanta Journal-Constitution Photographic Archives, Georgia State University Library · educational use permitted",
        "creditUrl": "https://dlg.usg.edu/record/gsu_ajc_5944"
      },
      "sources": [
        {
          "label": "Sources: Edward A. Hatfield · William Holmes Borders · New Georgia Encyclopedia · 2007",
          "url": "https://www.georgiaencyclopedia.org/articles/arts-culture/william-holmes-borders-1905-1993/"
        },
        {
          "label": "Atlanta Department of City Planning · Civil Rights Cemetery Tour · Atlanta Cemetery Network · 2022",
          "url": "https://static1.squarespace.com/static/5e6fd72f1f7dae1c021471b9/t/62e2e28cc36da05fea948c4b/1659036304775/Civil%2BRights%2BCemetery%2BTour.pdf"
        }
      ],
      "focus": "sweet-auburn",
      "status": "researched"
    },
    {
      "id": "annie-l-mcpheeters",
      "year": 1959,
      "date": "1959–1966",
      "person": "Annie Lou McPheeters",
      "title": "Annie Lou McPheeters worked to desegregate libraries",
      "description": "Annie Lou McPheeters, born in Floyd County on February 22, 1908, developed reading programs and a Black history collection while working in Atlanta’s segregated public libraries. (Williams) At the West Hunter Branch, she worked with advocacy groups that won desegregation of library services in 1959, although staff segregation continued into the following decade. (Williams) She joined Georgia State College as its first Black reference librarian in 1966, continuing a career that combined access to books with the preservation of Black history. (Williams)",
      "whyItBelongs": "McPheeters died on December 23, 1994, and her funeral program, dated December 29, 1994, listed South-View as the place of interment. (Williams; Auburn Avenue Research Library) The program also recorded her teaching at the Atlanta University School of Library Service, documenting the educational work behind her career in public libraries. (Auburn Avenue Research Library)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/atlanta-university-library-1942.jpg",
        "width": 787,
        "height": 1024,
        "alt": "Students browsing books among tall shelves in Atlanta University’s library.",
        "caption": "Students in Atlanta University’s library, March 1942. McPheeters is not pictured.",
        "credit": "Arthur Rothstein / FSA–OWI Collection, Library of Congress · no known restrictions",
        "creditUrl": "https://www.loc.gov/pictures/item/2017828802/"
      },
      "sources": [
        {
          "label": "Sources: Kerrie Cotten Williams · Annie L. McPheeters · New Georgia Encyclopedia · 2010",
          "url": "https://www.georgiaencyclopedia.org/articles/education/annie-l-mcpheeters-1908-1994/"
        },
        {
          "label": "Auburn Avenue Research Library · Funeral Services for Mrs. Annie L. McPheeters · Atlanta Funeral Programs Collection, Digital Library of Georgia · 1994",
          "url": "https://dlg.usg.edu/record/aarl_afpc_mcpheetersanniel19941229"
        }
      ],
      "focus": "sweet-auburn",
      "status": "researched",
      "note": "Project 2 information sheet review: Birth on February 22, 1908, and death on December 23, 1994, match articles E012 and E052 on page 40 and are supported by New Georgia Encyclopedia. Her December 29 funeral is a separate date. The 1959–1966 range refers to library desegregation and her Georgia State appointment."
    },
    {
      "id": "john-lewis-selma",
      "year": 1965,
      "date": "March 7, 1965",
      "person": "John Robert Lewis",
      "title": "John Lewis led voting rights marchers at Selma",
      "description": "John Robert Lewis chaired the Student Nonviolent Coordinating Committee and spoke at the 1963 March on Washington for Jobs and Freedom. (U.S. House of Representatives) On March 7, 1965, he and Hosea Williams led voting rights marchers across the Edmund Pettus Bridge in Selma, Alabama, where state troopers attacked them in the assault known as Bloody Sunday. (Lewis) Lewis later recalled that the marchers intended to reach Montgomery to demand protection of the right to vote. (Lewis)",
      "whyItBelongs": "Lewis went on to represent Atlanta in Congress from 1987 until his death in 2020. (U.S. House of Representatives) His burial at South-View on July 30, 2020, connected the cemetery to both his civil rights organizing and his later work in public office. (Clappin)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/john-lewis-newspaper-editors-1964.jpg",
        "width": 834,
        "height": 1024,
        "alt": "John Lewis speaks into a microphone at an American Society of Newspaper Editors meeting.",
        "caption": "John Robert Lewis addressing newspaper editors, April 16, 1964. The photograph predates the Selma march.",
        "credit": "Marion S. Trikosko / U.S. News & World Report Collection, Library of Congress · public domain",
        "creditUrl": "https://www.loc.gov/item/2003688130/"
      },
      "sources": [
        {
          "label": "Sources: U.S. House of Representatives · Lewis, John R. · History, Art & Archives",
          "url": "https://history.house.gov/People/Detail/16948"
        },
        {
          "label": "John Lewis · 50 Years Ago · Obama White House Archives · 2015",
          "url": "https://obamawhitehouse.archives.gov/blog/2015/08/06/50-years-ago"
        },
        {
          "label": "Elizabeth Clappin · Promised Land: A Tour of Atlanta’s Historically African American Cemeteries and the Graves of Civil Rights Pioneers · Atlanta Department of City Planning · 2022",
          "url": "https://citydesign.atlantaga.gov/blog/2022/7/28/promised-land-a-tour-of-atlantas-historically-african-american-cemeteries-and-the-graves-of-civil-rights-pioneers"
        }
      ],
      "focus": "auc",
      "status": "researched"
    },
    {
      "id": "grace-towns-hamilton",
      "year": 1965,
      "date": "June 1965",
      "person": "Grace Towns Hamilton",
      "title": "Grace Towns Hamilton won a seat in Georgia’s legislature",
      "description": "Grace Towns Hamilton became executive director of the Atlanta Urban League in 1943, organizing campaigns for better schooling, housing, health care and voting rights for Black Atlantans. (Spritzer and Bergmark) In June 1965, she became the first Black woman elected to the Georgia General Assembly, bringing that experience into the state legislature. (Spritzer and Bergmark) Her later work included helping write Atlanta’s 1973 city charter and taking part in redistricting debates that shaped Black representation in local and national government. (Spritzer and Bergmark)",
      "whyItBelongs": "Hamilton died on June 17, 1992, and was buried at South-View. (Spritzer and Bergmark; Royster and Mehta) Her grave connects the cemetery to the work of changing voting districts and government institutions as well as organizing for access to the ballot. (Spritzer and Bergmark)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/grace-towns-hamilton-legislature-1972.jpg",
        "width": 4000,
        "height": 2708,
        "alt": "Grace Towns Hamilton, at right, holding papers while seated in the Georgia House of Representatives.",
        "caption": "Grace Towns Hamilton in the Georgia House of Representatives, 1972.",
        "credit": "Boyd Lewis / Atlanta History Center · CC BY-NC-ND 4.0",
        "creditUrl": "https://dlg.usg.edu/record/geh_byd_3504"
      },
      "sources": [
        {
          "label": "Sources: Lorraine Nelson Spritzer and Jean B. Bergmark · Grace Towns Hamilton · New Georgia Encyclopedia · 2002",
          "url": "https://www.georgiaencyclopedia.org/articles/history-archaeology/grace-towns-hamilton-1907-1992/"
        },
        {
          "label": "Jacqueline Jones Royster and Prachi Mehta · South-View Cemetery: The Oldest African American Controlled Burial Ground in Atlanta, Georgia · Building Memories, Georgia Tech",
          "url": "https://leading-edge.iac.gatech.edu/building-memories/southview-cemetery/"
        }
      ],
      "focus": "capitol",
      "status": "researched"
    },
    {
      "id": "ruby-doris-smith-robinson",
      "year": 1966,
      "date": "1966",
      "person": "Ruby Doris Smith Robinson",
      "title": "Ruby Doris Smith Robinson led SNCC’s office",
      "description": "As a Spelman College student, Ruby Doris Smith Robinson took part in Atlanta sit-ins, the Rock Hill jail-no-bail protests and the Freedom Rides. (SNCC Digital Gateway) In the Atlanta office of the Student Nonviolent Coordinating Committee (SNCC), she coordinated supplies, transportation and support for field organizers, including the cars of the Sojourner Truth Motor Fleet. (SNCC Digital Gateway) In 1966, she became SNCC’s executive secretary, taking responsibility for the office work that supported protest and voter registration campaigns across the South. (SNCC Digital Gateway)",
      "whyItBelongs": "Robinson died of cancer in 1967 at age 25. (SNCC Digital Gateway) A South-View cemetery record card dated October 14, 1967, identified her as Ruby Doris Smith and documented her burial there. (Atlanta University Center)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/spelman-rockefeller-hall-1910.jpg",
        "width": 792,
        "height": 548,
        "alt": "Rockefeller Hall at Spelman College, where Ruby Doris Smith Robinson later studied.",
        "caption": "Rockefeller Hall at Spelman College in a photograph published in 1910. Robinson attended the college decades later.",
        "credit": "An Era of Progress and Promise (1910), p. 85, via Internet Archive · public domain; cropped",
        "creditUrl": "https://archive.org/details/eraofprogresspro00hart_0/page/85/mode/1up"
      },
      "sources": [
        {
          "label": "Sources: SNCC Digital Gateway · Ruby Doris Smith (Robinson)",
          "url": "https://snccdigital.org/people/ruby-doris-smith-robinson/"
        },
        {
          "label": "Atlanta University Center Robert W. Woodruff Library · Cemetery Record Card, October 14, 1967 · Digital Library of Georgia · 1967",
          "url": "https://dlg.usg.edu/record/auu_auc-078_auc-078-0137"
        }
      ],
      "focus": "auc",
      "status": "researched"
    },
    {
      "id": "hank-aaron-atlanta",
      "year": 1966,
      "date": "April 12, 1966",
      "person": "Henry Louis Aaron",
      "title": "Hank Aaron played in the Braves’ Atlanta debut",
      "description": "Henry Louis Aaron, known as Hank Aaron, began his professional career with the Indianapolis Clowns of the Negro American League before joining the Braves. (Minter) When the team moved from Milwaukee to Atlanta in 1966, he brought years of major league experience to a Southern city still confronting segregation and racial discrimination. (Minter) On April 12, 1966, he played in the Braves’ first regular-season game at Atlanta Stadium, marking the start of the franchise’s Atlanta years. (Atlanta History Center; Minter)",
      "whyItBelongs": "Aaron broke Babe Ruth’s career home run record in the same stadium in 1974. (Muder) He was buried at South-View after his death in 2021, joining the athletes and civil rights figures remembered in the cemetery’s history. (Clappin)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/hank-aaron-milwaukee-1960.png",
        "width": 302,
        "height": 435,
        "alt": "Hank Aaron wearing a Milwaukee Braves cap and baseball uniform.",
        "caption": "Henry Louis Aaron as a Milwaukee Brave, in a photograph published in December 1960. The photograph predates the team’s move to Atlanta.",
        "credit": "Baseball Digest, December 1960, p. 19, via Wikimedia Commons · public domain in the U.S.",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:Hank_Aaron_1960.png"
      },
      "sources": [
        {
          "label": "Sources: A. Binford Minter · Hank Aaron · New Georgia Encyclopedia · 2002",
          "url": "https://www.georgiaencyclopedia.org/articles/sports-outdoor-recreation/hank-aaron-1934-2021/"
        },
        {
          "label": "Atlanta History Center · The Atlanta Braves · Atlanta in 50 Objects",
          "url": "https://www.atlantahistorycenter.com/exhibitions/atlanta-in-50-objects/the-atlanta-braves/"
        },
        {
          "label": "Craig Muder · Henry Aaron Hits Home Run No. 715 · National Baseball Hall of Fame and Museum",
          "url": "https://baseballhall.org/discover-more/stories/inside-pitch/henry-aaron-hits-home-run-number-715"
        },
        {
          "label": "Elizabeth Clappin · Promised Land: A Tour of Atlanta’s Historically African American Cemeteries and the Graves of Civil Rights Pioneers · Atlanta Department of City Planning · 2022",
          "url": "https://citydesign.atlantaga.gov/blog/2022/7/28/promised-land-a-tour-of-atlantas-historically-african-american-cemeteries-and-the-graves-of-civil-rights-pioneers"
        }
      ],
      "focus": "fulton-county-stadium",
      "status": "researched"
    },
    {
      "id": "martin-luther-king-sr-civil-rights",
      "year": 1966,
      "date": "December 4, 1966",
      "person": "Martin Luther King Sr.",
      "title": "Martin Luther King Sr. spoke in Montgomery",
      "description": "Martin Luther King Sr., pastor of Atlanta’s Ebenezer Baptist Church, worked on voter registration and campaigns for equal pay for Black teachers. (King Institute) He supported his son’s civil rights work while worrying about the danger to his family during the Montgomery bus boycott. (King Institute) On December 4, 1966, he spoke at Holt Street Baptist Church during the Montgomery Improvement Association’s anniversary gathering, continuing his involvement in the movement beyond Atlanta. (Alabama Department of Archives and History)",
      "whyItBelongs": "King Sr. and his wife, Alberta Williams King, were buried at South-View. (Georgia Historical Society) Their son, Martin Luther King Jr., was also buried there after his funeral in 1968, before his crypt was moved to the King Center in 1970. (National Park Service)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/martin-luther-king-sr-lincoln-memorial-1977.jpg",
        "width": 1024,
        "height": 711,
        "alt": "Martin Luther King Sr. speaks at a podium in front of the seated Lincoln statue at the Lincoln Memorial.",
        "caption": "Martin Luther King Sr. at inauguration ceremonies, January 20, 1977. The photograph was taken after the Montgomery gathering.",
        "credit": "Warren K. Leffler / U.S. News & World Report Collection, Library of Congress · public domain",
        "creditUrl": "https://www.loc.gov/pictures/item/2017658314/"
      },
      "sources": [
        {
          "label": "Sources: The Martin Luther King, Jr. Research and Education Institute · King, Martin Luther, Sr. · Stanford University",
          "url": "https://kinginstitute.stanford.edu/king-martin-luther-sr"
        },
        {
          "label": "Alabama Department of Archives and History · Martin Luther King, Sr., Speaking to an Audience at Holt Street Baptist Church in Montgomery, Alabama · Jim Peppler Southern Courier Photograph Collection, Civil Rights Digital Library · 1966",
          "url": "https://crdl.usg.edu/record/aar_peppler_8378"
        },
        {
          "label": "Georgia Historical Society · Georgia Historical Society to Recognize South-View Cemetery with Historical Marker Dedication this Saturday · 2016",
          "url": "https://www.georgiahistory.com/georgia-historical-society-to-recognize-south-view-cemetery-with-historical-marker-dedication-this-saturday/"
        },
        {
          "label": "National Park Service · A Strong and Enduring Acknowledgment · Martin Luther King, Jr. National Historical Park · 2020",
          "url": "https://www.nps.gov/malu/a-strong-and-enduring-acknowledgment.htm"
        }
      ],
      "focus": "ebenezer",
      "status": "researched"
    },
    {
      "id": "julian-bond",
      "year": 1966,
      "date": "December 5, 1966",
      "person": "Horace Julian Bond",
      "title": "Julian Bond won the right to take his seat",
      "description": "Horace Julian Bond helped found the Student Nonviolent Coordinating Committee and worked as its communications director, sending reports of racial violence to the press and federal officials. (SNCC Digital Gateway) Elected to the Georgia House in 1965, he was refused his seat in January 1966 after supporting SNCC’s opposition to the Vietnam War. (U.S. Supreme Court) On December 5, 1966, the U.S. Supreme Court ruled that his exclusion violated the First Amendment, and Bond took his seat on January 9, 1967. (U.S. Supreme Court; SNCC Digital Gateway)",
      "whyItBelongs": "In a Canopy Atlanta interview, his son Michael Julian Bond described how the family divided Bond’s cremated remains between the Atlantic Ocean and South-View. (Bond and Roberts) He said the children brought a portion to the cemetery to carry out the burial wishes their father had shared with them. (Bond and Roberts)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/julian-bond-portrait-1966.jpg",
        "width": 681,
        "height": 1024,
        "alt": "Julian Bond in a suit and tie, facing a group of microphones.",
        "caption": "Julian Bond, January 26, 1966, shortly after Georgia legislators refused to seat him.",
        "credit": "Warren K. Leffler / U.S. News & World Report Collection, Library of Congress · public domain",
        "creditUrl": "https://www.loc.gov/pictures/item/2014645539/"
      },
      "sources": [
        {
          "label": "Sources: SNCC Digital Gateway · Julian Bond",
          "url": "https://snccdigital.org/people/julian-bond/"
        },
        {
          "label": "U.S. Supreme Court · Bond v. Floyd, 385 U.S. 116 · Legal Information Institute, Cornell Law School · 1966",
          "url": "https://www.law.cornell.edu/supremecourt/text/385/116"
        },
        {
          "label": "Ann Hill Bond and Nikki Roberts · Atlantans Share Their Familial Connections to South-View Cemetery · Canopy Atlanta · 2023",
          "url": "https://canopyatlanta.org/2023/11/17/atlantans-share-their-familial-connections-to-south-view-cemetery/"
        }
      ],
      "focus": "capitol",
      "status": "researched"
    },
    {
      "id": "martin-luther-king-jr",
      "year": 1968,
      "date": "April 9, 1968",
      "period": "civil-rights",
      "person": "Martin Luther King Jr.",
      "title": "Martin Luther King Jr. was buried at South-View",
      "description": "After Martin Luther King Jr. was assassinated in Memphis on April 4, 1968, his funeral took place in Atlanta on April 9. (King Institute) A service at Ebenezer Baptist Church was followed by a procession to Morehouse College, with two mules pulling a farm wagon carrying his casket and more than 100,000 mourners following through the streets. (King Institute) Morehouse educator Benjamin Elijah Mays delivered the eulogy, recalling King’s commitment to nonviolence and his support for striking sanitation workers. (King Institute)",
      "whyItBelongs": "King was buried at South-View after the services, and his crypt was relocated to the King Center in 1970. (National Park Service) His parents, Martin Luther King Sr. and Alberta Williams King, were later buried at South-View. (Georgia Historical Society)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/martin-luther-king-jr-1964.jpg",
        "width": 515,
        "height": 640,
        "alt": "Black-and-white portrait of Dr. Martin Luther King Jr. in a dark suit and tie, with his right hand raised.",
        "caption": "Martin Luther King Jr., 1964. The portrait predates his funeral.",
        "credit": "Dick DeMarsico / New York World-Telegram & Sun, Library of Congress · public domain",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:Martin_Luther_King_Jr_NYWTS.jpg"
      },
      "sources": [
        {
          "label": "Sources: The Martin Luther King, Jr. Research and Education Institute · Assassination of Martin Luther King, Jr. · Stanford University",
          "url": "https://kinginstitute.stanford.edu/assassination-martin-luther-king-jr"
        },
        {
          "label": "The Martin Luther King, Jr. Research and Education Institute · Mays, Benjamin Elijah · Stanford University",
          "url": "https://kinginstitute.stanford.edu/mays-benjamin-elijah"
        },
        {
          "label": "National Park Service · A Strong and Enduring Acknowledgment · Martin Luther King, Jr. National Historical Park · 2020",
          "url": "https://www.nps.gov/malu/a-strong-and-enduring-acknowledgment.htm"
        },
        {
          "label": "Georgia Historical Society · Georgia Historical Society to Recognize South-View Cemetery with Historical Marker Dedication this Saturday · 2016",
          "url": "https://www.georgiahistory.com/georgia-historical-society-to-recognize-south-view-cemetery-with-historical-marker-dedication-this-saturday/"
        }
      ],
      "focus": "ebenezer",
      "status": "researched"
    },
    {
      "id": "maynard-jackson-elected-1973",
      "year": 1973,
      "date": "October 16, 1973",
      "period": "legacy",
      "person": "Maynard Holbrook Jackson Jr.",
      "title": "Maynard Jackson was elected Atlanta’s first Black mayor",
      "description": "On October 16, 1973, Maynard Holbrook Jackson Jr. defeated incumbent Sam Massell to become Atlanta’s first Black mayor and the first Black mayor of a major Southern city. (Today in Georgia History) His administration increased opportunities for minority-owned businesses to receive city contracts and completed a new airport terminal. (Today in Georgia History) Jackson served three terms as mayor, and the airport was later renamed Hartsfield-Jackson in his honor. (Today in Georgia History)",
      "whyItBelongs": "His grandfather, John Wesley Dobbs, organized Black voter registration in Atlanta and was buried at South-View. (Bailey; Royster and Mehta) That family connection links Jackson’s election to an earlier generation’s efforts to secure a voice in city government. (Bailey; Today in Georgia History)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/Maynard_Jackson.jpg",
        "width": 95,
        "height": 103,
        "alt": "Photograph of former Atlanta mayor Maynard Jackson.",
        "caption": "Maynard Jackson, Atlanta’s first Black mayor.",
        "credit": "State Archives of North Carolina, Ralph Campbell Jr. Papers",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:Maynard_Jackson.jpg"
      },
      "sources": [
        {
          "label": "Sources: Georgia Historical Society and Georgia Public Broadcasting · Maynard Jackson Elected · Today in Georgia History",
          "url": "https://www.todayingeorgiahistory.org/tih-georgia-day/maynard-jackson-elected/"
        },
        {
          "label": "Matthew Bailey · John Wesley Dobbs · New Georgia Encyclopedia · 2005",
          "url": "https://www.georgiaencyclopedia.org/articles/history-archaeology/john-wesley-dobbs-1882-1961/"
        },
        {
          "label": "Jacqueline Jones Royster and Prachi Mehta · South-View Cemetery: The Oldest African American Controlled Burial Ground in Atlanta, Georgia · Building Memories, Georgia Tech",
          "url": "https://leading-edge.iac.gatech.edu/building-memories/southview-cemetery/"
        }
      ],
      "focus": "downtown",
      "status": "draft"
    },
    {
      "id": "hank-aaron",
      "year": 1974,
      "date": "April 8, 1974",
      "person": "Henry Louis Aaron",
      "title": "Hank Aaron broke Babe Ruth’s home run record",
      "description": "On April 8, 1974, Henry Louis Aaron hit his 715th career home run before a sellout crowd of 53,775 at Atlanta-Fulton County Stadium, passing Babe Ruth’s record. (Muder) The fourth-inning home run came off Los Angeles Dodgers pitcher Al Downing, and the Braves went on to win the game. (Muder) Aaron reached the milestone while facing racist threats and hate mail during the record chase, and he finished his major league career with 755 home runs. (Minter)",
      "whyItBelongs": "Aaron was buried at South-View after his death in 2021. (Clappin) The Atlanta Cemetery Network includes him in its history of civil rights figures, recognizing sport among the areas in which Black Atlantans challenged racial barriers. (Clappin)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/hank-aaron-1974.jpg",
        "width": 364,
        "height": 440,
        "alt": "Hank Aaron in an Atlanta Braves uniform and cap, seated with his arms folded.",
        "caption": "Hank Aaron in an Atlanta Braves publicity portrait, 1974.",
        "credit": "Photographer unknown / Texas Rangers, via Wikimedia Commons · public domain in the United States",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:Hank_Aaron_1974.jpg"
      },
      "sources": [
        {
          "label": "Sources: Craig Muder · Henry Aaron Hits Home Run No. 715 · National Baseball Hall of Fame and Museum",
          "url": "https://baseballhall.org/discover-more/stories/inside-pitch/henry-aaron-hits-home-run-number-715"
        },
        {
          "label": "A. Binford Minter · Hank Aaron · New Georgia Encyclopedia · 2002",
          "url": "https://www.georgiaencyclopedia.org/articles/sports-outdoor-recreation/hank-aaron-1934-2021/"
        },
        {
          "label": "Elizabeth Clappin · Promised Land: A Tour of Atlanta’s Historically African American Cemeteries and the Graves of Civil Rights Pioneers · Atlanta Department of City Planning · 2022",
          "url": "https://citydesign.atlantaga.gov/blog/2022/7/28/promised-land-a-tour-of-atlantas-historically-african-american-cemeteries-and-the-graves-of-civil-rights-pioneers"
        }
      ],
      "focus": "fulton-county-stadium",
      "status": "draft"
    },
    {
      "id": "alberta-williams-king-1974",
      "year": 1974,
      "date": "July 3, 1974",
      "period": "legacy",
      "person": "Alberta Williams King",
      "title": "Alberta Williams King’s funeral was held in Atlanta",
      "description": "Alberta Williams King helped organize the choir at Atlanta’s Ebenezer Baptist Church and served for many years as an organist. (King Institute) She raised her children, including Martin Luther King Jr., in a household closely involved in the church and continued her own education at Morris Brown College. (King Institute) She was killed while playing the organ at Ebenezer on June 30, 1974, and her funeral took place at the church on July 3. (Atlanta History Center)",
      "whyItBelongs": "King was buried at South-View, where her husband, Martin Luther King Sr., was later buried. (Georgia Historical Society) Their son had also been buried at the cemetery after his funeral in 1968, before his crypt was moved to the King Center. (National Park Service)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/Martin_Luther_King,_Henry_Elkins,_and_Alberta_Williams_King_at_Ebenezer,_1962_(cropped).png",
        "width": 302,
        "height": 471,
        "alt": "Alberta Williams King at Ebenezer Baptist Church in 1962.",
        "caption": "Alberta Williams King at Ebenezer Baptist Church, 1962.",
        "credit": "Photographer unknown / Wikimedia Commons, public domain",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:Martin_Luther_King,_Henry_Elkins,_and_Alberta_Williams_King_at_Ebenezer,_1962_(cropped).png"
      },
      "sources": [
        {
          "label": "Sources: The Martin Luther King, Jr. Research and Education Institute · King, Alberta Williams · Stanford University",
          "url": "https://kinginstitute.stanford.edu/king-alberta-williams"
        },
        {
          "label": "Atlanta History Center · Alberta Williams King Funeral · Boyd Lewis Photographs, Digital Library of Georgia · 1974",
          "url": "https://dlg.usg.edu/record/geh_byd_4202"
        },
        {
          "label": "Georgia Historical Society · Georgia Historical Society to Recognize South-View Cemetery with Historical Marker Dedication this Saturday · 2016",
          "url": "https://www.georgiahistory.com/georgia-historical-society-to-recognize-south-view-cemetery-with-historical-marker-dedication-this-saturday/"
        },
        {
          "label": "National Park Service · A Strong and Enduring Acknowledgment · Martin Luther King, Jr. National Historical Park · 2020",
          "url": "https://www.nps.gov/malu/a-strong-and-enduring-acknowledgment.htm"
        }
      ],
      "focus": "ebenezer",
      "status": "draft"
    },
    {
      "id": "albert-h-watts-president-1977",
      "year": 1977,
      "date": "1977",
      "period": "legacy",
      "person": "Albert Hawes Watts",
      "title": "Albert Hawes Watts became South-View’s president-treasurer",
      "description": "Albert Hawes Watts, a grandson of South-View co-founder Albert Watts, became the cemetery association’s president-treasurer in 1977. (South-View Cemetery Association) He had started at South-View digging graves and worked in several roles before taking responsibility for the association’s leadership. (South-View Cemetery Association) He remained president-treasurer until his death in 2001, continuing a family involvement that reached back to the cemetery’s founding. (South-View Cemetery Association)",
      "whyItBelongs": "His grandfather, Albert Watts, was South-View’s first treasurer until his death in 1903, and his father, Lewis Watts, served as secretary until 1936. (Royster and Mehta) The family’s work across those generations helped keep South-View operating as a Black-led institution, with relatives continuing to serve on its board and staff. (South-View Cemetery Association)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/Capt._Darrell_Bogan_speaking_at_South-View_Cemetery_in_Atlanta_in_2010.jpg",
        "width": 3000,
        "height": 2400,
        "alt": "Captain Darrell Bogan speaking at a ceremony at South-View Cemetery in 2010.",
        "caption": "A remembrance ceremony at South-View Cemetery, 2010. Watts is not pictured.",
        "credit": "Master Sgt. Stan Coleman / U.S. Air Force, public domain",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:Capt._Darrell_Bogan_speaking_at_South-View_Cemetery_in_Atlanta_in_2010.jpg"
      },
      "sources": [
        {
          "label": "Sources: South-View Cemetery Association · Our History",
          "url": "https://southviewcemetery.com/our-history/"
        },
        {
          "label": "Jacqueline Jones Royster and Prachi Mehta · South-View Cemetery: The Oldest African American Controlled Burial Ground in Atlanta, Georgia · Building Memories, Georgia Tech",
          "url": "https://leading-edge.iac.gatech.edu/building-memories/southview-cemetery/"
        }
      ],
      "focus": "south-view",
      "status": "draft",
      "note": "Project 2 information sheet review: The family succession on pages 28–29 agrees with the 1903, 1936, 1977 and 2001 dates in the cited histories. Page 29 gives 2003 for Winifred Watts Hemphill’s election; Building Memories gives 2004. No accession year for Hemphill has been added to the public text while this discrepancy remains unresolved."
    },
    {
      "id": "henry-o-flipper-reburial-1978",
      "year": 1978,
      "date": "February 11, 1978",
      "period": "legacy",
      "person": "Henry Ossian Flipper",
      "title": "Henry Ossian Flipper was reburied with military honors",
      "description": "Henry Ossian Flipper became the first Black graduate of the U.S. Military Academy at West Point in 1877. (Georgia Historical Society) After his court-martial and dismissal from the Army in 1882, he pursued work in engineering, surveying and government service, while seeking to clear his military record. (Georgia Historical Society) His discharge was corrected in 1976, and on February 11, 1978, he was reburied with full military honors in his hometown of Thomasville, Georgia. (Georgia Historical Society)",
      "whyItBelongs": "Flipper had attended schools in Atlanta after emancipation, including Atlanta University, before entering West Point. (National Park Service) He was buried at South-View after his death in 1940 and remained there until the reburial in Thomasville. (South-View Cemetery Association)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/Henry_Ossian_Flipper.jpg",
        "width": 1513,
        "height": 1897,
        "alt": "Historical portrait of Henry Ossian Flipper wearing a military uniform.",
        "caption": "Henry Ossian Flipper in uniform, about 1880.",
        "credit": "Miriam Matthews Photograph Collection / UCLA Library Digital Collections, public domain",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:Henry_Ossian_Flipper,_c1880.jpg"
      },
      "sources": [
        {
          "label": "Sources: Georgia Historical Society · First Black Graduate of West Point · Georgia Historical Marker Program · 1989",
          "url": "https://www.georgiahistory.com/ghmi_marker_updated/first-black-graduate-of-west-point/"
        },
        {
          "label": "National Park Service · Henry O. Flipper",
          "url": "https://home.nps.gov/people/henryflipper.htm"
        },
        {
          "label": "South-View Cemetery Association · Our History",
          "url": "https://southviewcemetery.com/our-history/"
        }
      ],
      "focus": "south-view",
      "status": "draft"
    },
    {
      "id": "benjamin-mays-south-view-1984",
      "year": 1984,
      "date": "March 28, 1984",
      "period": "legacy",
      "person": "Benjamin Elijah Mays",
      "title": "Morehouse president Benjamin Elijah Mays died",
      "description": "Benjamin Elijah Mays became president of Morehouse College on August 1, 1940, served until 1967 and died on March 28, 1984. (King Institute) An educator and Baptist minister, he mentored Martin Luther King Jr., who often visited his office after chapel services to discuss theology and current events. (King Institute) Their relationship continued after King left Morehouse, and Mays supported his civil rights work and delivered the eulogy at his funeral in 1968. (King Institute)",
      "whyItBelongs": "Mays was first buried at South-View, before his remains were moved to the Morehouse campus. (South-View Cemetery Association) He was reinterred there with his wife, Sadie Gray Mays, connecting the cemetery’s burial history to the college where he had spent much of his career. (Royster and Mehta)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/Benjamin_Mays_Portrait_1921.png",
        "width": 966,
        "height": 1424,
        "alt": "Historical portrait of educator Benjamin Elijah Mays.",
        "caption": "Benjamin Elijah Mays, former president of Morehouse College.",
        "credit": "Historical portrait via Wikimedia Commons, public domain",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:Benjamin_Mays_Portrait_1921.png"
      },
      "sources": [
        {
          "label": "Sources: The Martin Luther King, Jr. Research and Education Institute · Mays, Benjamin Elijah · Stanford University",
          "url": "https://kinginstitute.stanford.edu/mays-benjamin-elijah"
        },
        {
          "label": "South-View Cemetery Association · Our History",
          "url": "https://southviewcemetery.com/our-history/"
        },
        {
          "label": "Jacqueline Jones Royster and Prachi Mehta · South-View Cemetery: The Oldest African American Controlled Burial Ground in Atlanta, Georgia · Building Memories, Georgia Tech",
          "url": "https://leading-edge.iac.gatech.edu/building-memories/southview-cemetery/"
        },
        {
          "label": "The Martin Luther King, Jr. Research and Education Institute · Benjamin Mays Appointed President of Morehouse · Stanford University",
          "url": "https://kinginstitute.stanford.edu/benjamin-mays-appointed-president-morehouse"
        }
      ],
      "focus": "auc",
      "status": "draft",
      "note": "Project 2 information sheet review: The August 1, 1940 appointment date in article E032 on page 40 is confirmed by the Stanford King Institute chronology. The March 28, 1984 date on this card is his death, not the start of his Morehouse presidency."
    },
    {
      "id": "martin-luther-king-sr",
      "year": 1984,
      "date": "November 1984",
      "person": "Martin Luther King Sr.",
      "title": "Martin Luther King Sr. was buried at South-View",
      "description": "Martin Luther King Sr. led Ebenezer Baptist Church in Atlanta from 1931 to 1975, combining his ministry with campaigns for voter registration and equal pay for Black teachers. (King Institute) He helped organize civic work through the church and supported his son’s civil rights leadership, even when he feared for the family’s safety. (King Institute) His years at Ebenezer included the assassination of Martin Luther King Jr. in 1968 and the killing of his wife, Alberta Williams King, in 1974. (King Institute; Atlanta History Center)",
      "whyItBelongs": "King Sr. died on November 11, 1984, and was buried at South-View, where Alberta Williams King was also buried. (King Institute; Georgia Historical Society) The cemetery’s historical marker names both parents as religious and civil rights leaders. (Georgia Historical Society)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/martin-luther-king-sr-1979.jpg",
        "width": 743,
        "height": 1042,
        "alt": "Martin Luther King Sr. seated in a dark suit and patterned tie at Ebenezer Baptist Church.",
        "caption": "Martin Luther King Sr. at Ebenezer Baptist Church, January 14, 1979. Cropped from a White House photograph.",
        "credit": "White House staff photographer / National Archives, NAID 183007 · public domain",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:Martin_Luther_King_Sr,_c1977-81.jpg"
      },
      "sources": [
        {
          "label": "Sources: The Martin Luther King, Jr. Research and Education Institute · King, Martin Luther, Sr. · Stanford University",
          "url": "https://kinginstitute.stanford.edu/king-martin-luther-sr"
        },
        {
          "label": "The Martin Luther King, Jr. Research and Education Institute · Assassination of Martin Luther King, Jr. · Stanford University",
          "url": "https://kinginstitute.stanford.edu/assassination-martin-luther-king-jr"
        },
        {
          "label": "Atlanta History Center · Alberta Williams King Funeral · Boyd Lewis Photographs, Digital Library of Georgia · 1974",
          "url": "https://dlg.usg.edu/record/geh_byd_4202"
        },
        {
          "label": "Georgia Historical Society · Georgia Historical Society to Recognize South-View Cemetery with Historical Marker Dedication this Saturday · 2016",
          "url": "https://www.georgiahistory.com/georgia-historical-society-to-recognize-south-view-cemetery-with-historical-marker-dedication-this-saturday/"
        }
      ],
      "focus": "ebenezer",
      "status": "draft"
    },
    {
      "id": "herman-j-russell",
      "year": 1992,
      "date": "1992",
      "person": "Herman Jerome Russell",
      "title": "Herman Russell’s company helped build the Georgia Dome",
      "description": "Herman Jerome Russell grew a plastering business into a construction and real estate company whose projects changed much of Atlanta’s skyline. (Chenault) His company helped build the Georgia Dome, which opened in 1992, as well as Hartsfield-Jackson Atlanta International Airport, Turner Field and Philips Arena. (Chenault; Georgia Historical Society) In the early 1960s, he became the first Black member of the Atlanta Chamber of Commerce and later helped Maynard Holbrook Jackson Jr. win the mayor’s office. (Chenault)",
      "whyItBelongs": "Russell was a friend of Martin Luther King Jr. and provided advice and financial support during the Civil Rights Movement. (Chenault) He died in 2014 and was buried at South-View, connecting the cemetery to both Atlanta’s construction industry and its political history. (Chenault; Royster and Mehta)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/georgia-dome-2011.jpg",
        "width": 1024,
        "height": 768,
        "alt": "The white roof and striped exterior of the Georgia Dome, with a street and trees in the foreground.",
        "caption": "The Georgia Dome, photographed in 2011. Russell’s company helped build the stadium.",
        "credit": "Ken Lund / Flickr · CC BY-SA 2.0",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:Georgia_Dome,_Atlanta,_Georgia_2011.jpg"
      },
      "sources": [
        {
          "label": "Sources: Wesley Chenault · Herman J. Russell · New Georgia Encyclopedia · 2009",
          "url": "https://www.georgiaencyclopedia.org/articles/business-economy/herman-j-russell-1930-2014/"
        },
        {
          "label": "Georgia Historical Society · Georgia Dome · Georgia Historical Marker Program · 2018",
          "url": "https://www.georgiahistory.com/ghmi_marker_updated/georgia-dome/"
        },
        {
          "label": "Jacqueline Jones Royster and Prachi Mehta · South-View Cemetery: The Oldest African American Controlled Burial Ground in Atlanta, Georgia · Building Memories, Georgia Tech",
          "url": "https://leading-edge.iac.gatech.edu/building-memories/southview-cemetery/"
        }
      ],
      "focus": "georgia-dome",
      "status": "draft"
    },
    {
      "id": "lillian-miles-lewis-2013",
      "year": 2013,
      "date": "January 7, 2013",
      "period": "legacy",
      "person": "Lillian Miles Lewis",
      "title": "Lillian Miles Lewis’s funeral was held at Ebenezer",
      "description": "Lillian Miles Lewis worked as a librarian and director of special collections at Atlanta University, where she took a position in 1965. (Auburn Avenue Research Library) She later held administrative roles at Clark Atlanta University and supported her husband, John Robert Lewis, through his city council and congressional career. (Auburn Avenue Research Library) After her death on December 31, 2012, her funeral took place at Ebenezer Baptist Church on January 7, 2013. (Auburn Avenue Research Library)",
      "whyItBelongs": "Her funeral program listed South-View as the place of interment and recorded her work in education and public life. (Auburn Avenue Research Library) Her husband was buried at the same cemetery in 2020, bringing their family’s history of service in Atlanta into South-View’s history. (Clappin)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/Martin_Luther_King_Jr._National_Historic_Site_August_2016_01_(Ebenezer_Baptist_Church_Horizon_Sanctuary).jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Exterior of Ebenezer Baptist Church Horizon Sanctuary in Atlanta.",
        "caption": "Ebenezer Baptist Church’s Horizon Sanctuary, photographed in 2016. The photograph shows the funeral venue after the service.",
        "credit": "Michael Barera / Wikimedia Commons, CC BY-SA 4.0",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:Martin_Luther_King_Jr._National_Historic_Site_August_2016_01_(Ebenezer_Baptist_Church_Horizon_Sanctuary).jpg"
      },
      "sources": [
        {
          "label": "Sources: Auburn Avenue Research Library · Celebrating the Life, Legacy, and Spirit of Lillian Miles Lewis · Atlanta Funeral Programs Collection, Digital Library of Georgia · 2013",
          "url": "https://dlg.usg.edu/record/aarl_afpc_lewislillianmiles20130107"
        },
        {
          "label": "Elizabeth Clappin · Promised Land: A Tour of Atlanta’s Historically African American Cemeteries and the Graves of Civil Rights Pioneers · Atlanta Department of City Planning · 2022",
          "url": "https://citydesign.atlantaga.gov/blog/2022/7/28/promised-land-a-tour-of-atlantas-historically-african-american-cemeteries-and-the-graves-of-civil-rights-pioneers"
        }
      ],
      "focus": "ebenezer",
      "status": "draft"
    },
    {
      "id": "south-view-historical-marker-2016",
      "year": 2016,
      "date": "April 30, 2016",
      "period": "legacy",
      "person": "South-View Cemetery",
      "title": "A historical marker documented South-View’s history",
      "description": "On April 30, 2016, the Georgia Historical Society and Historic South-View Preservation Foundation dedicated a historical marker at the cemetery. (Georgia Historical Society) The marker described how formerly enslaved African Americans founded South-View in 1886 after objecting to their treatment at Atlanta’s segregated burial grounds. (Georgia Historical Society) It also identified several people buried there, including Alonzo Franklin Herndon, Henry McNeal Turner and the parents of Martin Luther King Jr. (Georgia Historical Society)",
      "whyItBelongs": "Placed in front of the cemetery’s main office, the marker gave visitors an account of South-View’s founding and its burial traditions. (Georgia Historical Society) The dedication took place a decade before the cemetery’s National Register listing in 2026, making them separate events in its preservation history. (Georgia Historical Society; National Park Service)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/Grave_of_Horace_A._Bohannon,_South-View_Cemetery,_Atlanta_in_2010.jpg",
        "width": 3872,
        "height": 2592,
        "alt": "Grave of Tuskegee Airman Horace A. Bohannon at South-View Cemetery.",
        "caption": "A wreath at Horace A. Bohannon’s grave in South-View Cemetery, 2010. The photograph shows the cemetery, rather than the marker dedication.",
        "credit": "Master Sgt. Stan Coleman / U.S. Air Force, public domain",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:Grave_of_Horace_A._Bohannon,_South-View_Cemetery,_Atlanta_in_2010.jpg"
      },
      "sources": [
        {
          "label": "Sources: Georgia Historical Society · Georgia Historical Society to Recognize South-View Cemetery with Historical Marker Dedication this Saturday · 2016",
          "url": "https://www.georgiahistory.com/georgia-historical-society-to-recognize-south-view-cemetery-with-historical-marker-dedication-this-saturday/"
        },
        {
          "label": "Georgia Historical Society · South-View Cemetery · Georgia Historical Marker Program · 2016",
          "url": "https://www.georgiahistory.com/ghmi_marker_updated/south-view-cemetery/"
        },
        {
          "label": "National Park Service · Weekly List 2026 07 10 · National Register of Historic Places · 2026",
          "url": "https://home.nps.gov/subjects/nationalregister/weekly-list-2026-07-10.htm"
        }
      ],
      "focus": "south-view",
      "status": "draft"
    },
    {
      "id": "john-lewis",
      "year": 2020,
      "date": "July 30, 2020",
      "person": "John Robert Lewis",
      "title": "John Lewis was buried at South-View",
      "description": "John Robert Lewis represented Georgia’s Fifth Congressional District from 1987 until his death in 2020, after years of civil rights organizing with the Student Nonviolent Coordinating Committee. (U.S. House of Representatives) His earlier work included the March on Washington and the voting rights march at Selma, where state troopers attacked him and other demonstrators in 1965. (U.S. House of Representatives) After lying in state at the U.S. Capitol, he was honored at an Ebenezer Baptist Church funeral on July 30, 2020. (WSB-TV)",
      "whyItBelongs": "Lewis was buried at South-View that day, joining other people whose work appears in Atlanta’s civil rights history. (Clappin) His wife, librarian and civic worker Lillian Miles Lewis, had been buried there after her funeral in 2013. (Auburn Avenue Research Library)",
      "media": {
        "type": "Historical photograph",
        "src": "assets/images/archive/john-lewis-congressional-portrait.jpg",
        "width": 242,
        "height": 310,
        "alt": "Black-and-white portrait of John Lewis standing behind a chair, beside a U.S. flag and a studio backdrop depicting the Capitol.",
        "caption": "John Robert Lewis in a House Photography Studio portrait, about 1992.",
        "credit": "House Photography Studio / Collection of the U.S. House of Representatives · public domain",
        "creditUrl": "https://history.house.gov/Collection/Detail/36507223312"
      },
      "sources": [
        {
          "label": "Sources: U.S. House of Representatives · Lewis, John R. · History, Art & Archives",
          "url": "https://history.house.gov/People/Detail/16948"
        },
        {
          "label": "WSBTV.com News Staff · Final Farewell: The World Says Goodbye to Civil Rights Hero Rep. John Lewis · WSB-TV · 2020",
          "url": "https://www.wsbtv.com/news/local/heres-what-expect-during-rep-john-lewis-funeral/YJZQUO6XXFATFOFS7RUBVSC2CQ/"
        },
        {
          "label": "Elizabeth Clappin · Promised Land: A Tour of Atlanta’s Historically African American Cemeteries and the Graves of Civil Rights Pioneers · Atlanta Department of City Planning · 2022",
          "url": "https://citydesign.atlantaga.gov/blog/2022/7/28/promised-land-a-tour-of-atlantas-historically-african-american-cemeteries-and-the-graves-of-civil-rights-pioneers"
        },
        {
          "label": "Auburn Avenue Research Library · Celebrating the Life, Legacy, and Spirit of Lillian Miles Lewis · Atlanta Funeral Programs Collection, Digital Library of Georgia · 2013",
          "url": "https://dlg.usg.edu/record/aarl_afpc_lewislillianmiles20130107"
        }
      ],
      "focus": "downtown",
      "status": "draft"
    },
    {
      "id": "national-register-2026",
      "year": 2026,
      "date": "July 6, 2026",
      "person": "South-View Cemetery",
      "title": "South-View joined the National Register of Historic Places",
      "description": "South-View Cemetery was listed on the National Register of Historic Places on July 6, 2026, 140 years after its founding. (National Park Service; Georgia Historical Society) Established by Black Atlantans in response to discrimination at segregated burial grounds, the cemetery grew from its original 25 acres to more than 100 acres. (Georgia Historical Society) The listing identified the cemetery at 1990 Jonesboro Road SE, where generations of Atlanta families had buried their relatives. (National Park Service; Georgia Historical Society)",
      "whyItBelongs": "The National Register listing followed the dedication of a Georgia historical marker at South-View in 2016. (Georgia Historical Society) Descendants of the founders continued to work in the cemetery’s leadership, keeping the association connected to the families that established it. (South-View Cemetery Association)",
      "media": {
        "type": "Photograph",
        "src": "assets/images/archive/Capt._Darrell_Bogan_speaking_at_South-View_Cemetery_in_Atlanta_in_2010.jpg",
        "width": 3000,
        "height": 2400,
        "alt": "Air Force personnel and visitors gathered among graves and trees at South-View Cemetery for a remembrance ceremony.",
        "caption": "Wreaths Across America at South-View Cemetery, December 2010. The photograph predates the National Register listing.",
        "credit": "Master Sgt. Stan Coleman / U.S. Air Force · public domain",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:Capt._Darrell_Bogan_speaking_at_South-View_Cemetery_in_Atlanta_in_2010.jpg"
      },
      "sources": [
        {
          "label": "Sources: National Park Service · Weekly List 2026 07 10 · National Register of Historic Places · 2026",
          "url": "https://home.nps.gov/subjects/nationalregister/weekly-list-2026-07-10.htm"
        },
        {
          "label": "Georgia Historical Society · Georgia Historical Society to Recognize South-View Cemetery with Historical Marker Dedication this Saturday · 2016",
          "url": "https://www.georgiahistory.com/georgia-historical-society-to-recognize-south-view-cemetery-with-historical-marker-dedication-this-saturday/"
        },
        {
          "label": "South-View Cemetery Association · Our History",
          "url": "https://southviewcemetery.com/our-history/"
        }
      ],
      "focus": "skyline",
      "status": "draft"
    },
    {
      "id": "georgia-tech-lmc-3403",
      "year": 2026,
      "date": "Fall 2026",
      "person": "Georgia Tech students, LMC 3403",
      "title": "Georgia Tech students created this timeline",
      "description": "In fall 2026, Mickey Paulus, Rick Berglund, Sunny Lin and Vaishnavi Manivannan created this illustrated timeline for Georgia Tech’s LMC 3403 course. (Project team) The project brought together historical entries, archival photographs and source links in a website whose Atlanta skyline changes as the reader moves through time. (Project team) Its text was kept in a separate file so the people maintaining the site could add entries and update the research after the semester. (Project team)",
      "whyItBelongs": "The timeline was developed for South-View to share the people and events connected to the cemetery. (Project team) Its editing instructions explain how cemetery staff can revise entries, replace photographs and add sources as more research becomes available. (Project team)",
      "media": {
        "type": "Photograph",
        "src": "assets/images/archive/georgia-tech-tower-2022.jpg",
        "width": 1024,
        "height": 768,
        "alt": "Tech Tower on Georgia Tech’s campus, framed by trees beneath a blue sky.",
        "caption": "Tech Tower at Georgia Tech, January 2022. The photograph predates the class project.",
        "credit": "Tyler Lahti / Flickr · CC BY-SA 2.0",
        "creditUrl": "https://commons.wikimedia.org/wiki/File:Tech_Tower_in_Atlanta.jpg"
      },
      "sources": [
        {
          "label": "Sources: Mickey Paulus, Rick Berglund, Sunny Lin and Vaishnavi Manivannan · South-View: An Illustrated History · LMC 3403, Georgia Tech · 2026",
          "url": "README.md"
        }
      ],
      "focus": "midtown",
      "status": "draft",
      "note": ""
    }
  ],
};
