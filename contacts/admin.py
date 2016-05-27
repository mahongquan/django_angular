from django.contrib import admin
from contacts.models import *

class ContactAdmin(admin.ModelAdmin):
    pass
admin.site.register(Contact,ContactAdmin)
