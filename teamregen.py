def make_element(q):
    n,t,a,i=q
    r = '    <div class=person onclick="show(this)"><img src="team/'+i+'">\n        <div class=name>'+n+'</div>\n'
    if t!='none':
        r+='        <div class=team>'+t+'</div>\n'
    return r+ '        <div class=about>'+a+'</div>\n    </div>\n\n'


path = 'teamgen/'
with open(path+'header.txt') as f:html=f.read()
with open(path+'headermobile.txt') as f:htmlmob=f.read()


html += '\n  <div class=pcontainer>Faculty and Mentors</div><!-- pcontainer is what I use for heading the different sections-->\n<!-- you need an empty pcontainer div every 5 people so that if their text was different lengths the pcontainer makes all 5 of the next people start at the same height.-->\n'
htmlmob += '\n  <div class=pcontainer>Faculty and Mentors</div><!-- pcontainer is what I use for heading the different sections-->\n<!-- you need an empty pcontainer div every 5 people so that if their text was different lengths the pcontainer makes all 5 of the next people start at the same height.-->\n'
i = 0
with open(path+'mentors.txt') as f:
    for s in f.read().split('\n\n'):
        html += make_element(s.split('\n'))
        htmlmob += make_element(s.split('\n'))
        i+=1
        if i%5 == 0:
            html += '\n    <div class=pcontainer></div>\n\n'
        if i%2 == 0:
            htmlmob += '\n    <div class=pcontainer></div>\n\n'

html += '\n  <div class=pcontainer>Current Members</div>\n'
htmlmob += '\n  <div class=pcontainer>Current Members</div>\n'
i = 0
with open(path+'team.txt') as f:
    for s in f.read().split('\n\n'):
        html += make_element(s.split('\n'))
        htmlmob += make_element(s.split('\n'))
        i+=1
        if i%5 == 0:
            html += '\n    <div class=pcontainer></div>\n\n'
        if i%2 == 0:
            htmlmob += '\n    <div class=pcontainer></div>\n\n'

html += '\n  <div class=pcontainer>Graduates</div>\n'
htmlmob += '\n  <div class=pcontainer>Graduates</div>\n'
i = 0
with open(path+'grads.txt') as f:
    for s in f.read().split('\n\n'):
        html += make_element(s.split('\n'))
        htmlmob += make_element(s.split('\n'))
        i+=1
        if i%5 == 0:
            html += '\n    <div class=pcontainer></div>\n\n'
        if i%2 == 0:
            htmlmob += '\n    <div class=pcontainer></div>\n\n'

with open(path+'footer.txt') as f:
    html += f.read()
with open(path+'footermobile.txt') as f:
    htmlmob += f.read()

with open('team.html','w+') as f:f.write(html)
with open('team_mobile.html','w+') as f:f.write(htmlmob)
