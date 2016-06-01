package net.cowerling;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

/**
 * Created by dell on 2016-6-1.
 */
public class GetDictionaryTerm extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        StringBuilder stringBuilder = new StringBuilder();

        String term = request.getParameter("term");
        for (Entry entry : Entries.DATA) {
            if (entry.getName().toLowerCase().equals(term.toLowerCase())) {

                stringBuilder.append("<div class='entry'>");
                stringBuilder.append("<h3 class='term'>" + entry.getName() + "</h3>");
                stringBuilder.append("<div class='part'>" + entry.getPart() + "</div>");
                stringBuilder.append("<div class='definition'>" + entry.getDefinition());
                if (entry.getQuotes().length != 0) {
                    for (String quote : entry.getQuotes()) {
                        stringBuilder.append("<div class='quote-line'>" + quote + "</div>");
                    }
                    if (entry.getAuthor() != null) {
                        stringBuilder.append("<div class='quote-author'>" + entry.getAuthor() + "</div>");
                    }
                }
                stringBuilder.append("</div>");
                stringBuilder.append("</div>");
            }
        }

        if (stringBuilder.length() != 0) {
            out.print(stringBuilder.toString());
        } else {
            out.print("<div>Sorry, you term was not found.</div>");
        }
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
