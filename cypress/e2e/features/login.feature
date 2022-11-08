Feature: Displayed page section
    Background:
        Given Open product
        When Close modal letter
    Scenario Outline: Open shop page
        And Open section "<sectioName>" in shop header
        Then Section is open
    Examples:
    | sectioName   |
    | left sidebar |



# Feature: Displayed page section
#     Background:
#         Given Open product
#         When Close modal letter
#     Scenario Outline: Open shop page
#         And Open section "<sectionName>" in shop header
#         Then Section is open
#         Examples: 
#         | sectionName |           
#         | no sidebar |
#         | infinite scroll |

# @focus 
# Scenario Outline: Open main page dress
# And Open section "<sectionName>" in shop header
# And Section is open
# And Open first result filter
# Then Section is open
# When Click button add to cart
#         Examples: 
#         | sectionName |           
#         | left sidebar |