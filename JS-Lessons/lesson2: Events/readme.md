# Event Capturing          # Event Bubbling
|-Document                      Document-|
|   |-HTML                    HTML-|
|   |   |-Body              Body-|
|   |   |   |-Div         Div-|
|   |   |   |   |-Button-|
                 (Target)




## 3-Phases
    1. Event Capturing
    2. Target
    3. Event Buddling

    Document -> HTML -> Body -> Div -> Button (Event Capturing)
    Button -> Div -> Body -> HTML -> Document (Event Bubbling)
    Button (Target)
