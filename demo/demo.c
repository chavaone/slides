#include <stdio.h>
#include <locale.h>
#include <libintl.h>

#define _(str) gettext(str)

int
main ()
{
    int number;
    char name[30];
  
    setlocale (LC_ALL, "");
    bindtextdomain ("demo", "/usr/local/share/locale");
    textdomain ("demo");

    //Translators: This is a comment.
    printf (gettext("Enter your details.\n"));
    printf (gettext("Name:"));
    scanf ("%s", name);
    printf (gettext("Number of children:"));
    scanf ("%i", &number);
    printf (ngettext ("Hi %s, you have one child.\n", "Hi %s, you have %i children.\n", number), name, number);
}
