package net.cowerling;

import java.util.ArrayList;

/**
 * Created by dell on 2016-6-1.
 */
public class Entry {
    private String name;
    private String part;
    private String definition;
    private ArrayList<String> quotes = new ArrayList<String>();
    private String author;

    public Entry(String name, String part, String definition) {
        this.name = name;
        this.part = part;
        this.definition = definition;
        this.author = null;
    }

    public Entry(String name, String part, String definition, String[] quoteStrings) {
        this.name = name;
        this.part = part;
        this.definition = definition;
        addQuote(quoteStrings);
        this.author = null;
    }

    public Entry(String name, String part, String definition, String[] quoteStrings, String author) {
        this.name = name;
        this.part = part;
        this.definition = definition;
        addQuote(quoteStrings);
        this.author = author;
    }

    public void addQuote(String[] quoteStrings) {
        for (String quoteString : quoteStrings) {
            quotes.add(quoteString);
        }
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getName() {
        return name;
    }

    public String getPart() {
        return part;
    }

    public String getDefinition() {
        return definition;
    }

    public String[] getQuotes() {
        return quotes.toArray(new String[quotes.size()]);
    }

    public String getAuthor() {
        return author;
    }
}

class Entries {
    public static final Entry[] DATA = {
        new Entry(
            "EAVESDROP",
            "v.i.",
            "Secretly to overhear a catalogue of the crimes and vices of another or yourself.",
            new String[] {
                    "A lady with one of her ears applied",
                    "To an open keyhole heard, inside,",
                    "Two female gossips in converse free &mdash;",
                    "The subject engaging them was she.",
                    "\"I think,\" said one, \"and my husband thinks",
                    "That she\'s a prying, inquisitive minx!\"",
                    "As soon as no more of it she could hear",
                    "The lady, indignant, removed her ear.",
                    "\"I will not stay,\" she said, with a pout,",
                    "\"To hear my character lied about!\""},
            "Gopete Sherany"),
            new Entry(
                    "EDIBLE",
                    "adj.",
                    "Good to eat, and wholesome to digest, as a worm to a toad, a toad to a snake, a snake to a pig, a pig to a man, and a man to a worm."),
            new Entry(
                    "EDUCATION",
                    "n.",
                    "That which discloses to the wise and disguises from the foolish their lack of understanding."),
            new Entry(
                    "ELOQUENCE",
                    "n.",
                    "The art of orally persuading fools that white is the color that it appears to be.  It includes the gift of making any color appear white."),
            new Entry(
                    "ELYSIUM",
                    "n.",
                    "An imaginary delightful country which the ancients foolishly believed to be inhabited by the spirits of the good.  This ridiculous and mischievous fable was swept off the face of the earth by the early Christians &mdash; may their souls be happy in Heaven!"),
            new Entry(
                    "EMANCIPATION",
                    "n.",
                    "A bondman \'s change from the tyranny of another to the despotism of himself.",
                    new String[] {
                            "He was a slave:  at word he went and came;",
                            "His iron collar cut him to the bone.",
                            "Then Liberty erased his owner\'s name,",
                            "Tightened the rivets and inscribed his own."},
                    "G.J."),
            new Entry(
                    "EMOTION",
                    "n.",
                    "A prostrating disease caused by a determination of the heart to the head.  It is sometimes accompanied by a copious discharge of hydrated chloride of sodium from the eyes."),
            new Entry(
                    "ENVELOPE",
                    "n.",
                    "The coffin of a document; the scabbard of a bill; the husk of a remittance; the bed-gown of a love-letter."),
            new Entry(
                    "ENVY",
                    "n.",
                    "Emulation adapted to the meanest capacity."),
            new Entry(
                    "EPITAPH",
                    "n.",
                    "An inscription on a tomb, showing that virtues acquired by death have a retroactive effect. Following is a touching example:",
                    new String[] {
                            "Here lie the bones of Parson Platt,",
                            "Wise, pious, humble and all that,",
                            "Who showed us life as all should live it;",
                            "Let that be said &mdash; and God forgive it!"}),
            new Entry(
                    "EVANGELIST",
                    "n.",
                    "A bearer of good tidings, particularly (in a religious sense) such as assure us of our own salvation and the damnation of our neighbors."),
            new Entry(
                    "FAITH",
                    "n.",
                    "Belief without evidence in what is told by one who speaks without knowledge, of things without parallel."),
            new Entry(
                    "FAMOUS",
                    "adj.",
                    "Conspicuously miserable.",
                    new String[] {
                            "Done to a turn on the iron, behold",
                            "Him who to be famous aspired.",
                            "Content?  Well, his grill has a plating of gold,",
                            "And his twistings are greatly admired."},
                    "Hassan Brubuddy"),
            new Entry(
                    "FELON",
                    "n.",
                    "A person of greater enterprise than discretion, who in embracing an opportunity has formed an unfortunate attachment."),
            new Entry(
                    "FIDDLE",
                    "n.",
                    "An instrument to tickle human ears by friction of a horse\'s tail on the entrails of a cat.",
                    new String[] {
                            "To Rome said Nero:  \"If to smoke you turn",
                            "I shall not cease to fiddle while you burn.\"",
                            "To Nero Rome replied:  \"Pray do your worst,",
                            "\'Tis my excuse that you were fiddling first.\""},
                    "Orm Pludge"),
            new Entry(
                    "FIDELITY",
                    "n.",
                    "A virtue peculiar to those who are about to be betrayed."),
            new Entry(
                    "FLOP",
                    "v.",
                    "Suddenly to change one\'s opinions and go over to another party. The most notable flop on record was that of Saul of Tarsus, who has been severely criticised as a turn-coat by some of our partisan journals."),
            new Entry(
                    "FORCE",
                    "n.",
                    "",
                    new String[] {
                            "\"Force is but might,\" the teacher said &mdash;",
                            "\"That definition\'s just.\"",
                            "The boy said naught but thought instead,",
                            "Remembering his pounded head:",
                            "\"Force is not might but must!\""}),
            new Entry(
                    "FORGETFULNESS",
                    "n.",
                    "A gift of God bestowed upon doctors in compensation for their destitution of conscience."),
            new Entry(
                    "FRIENDLESS",
                    "adj.",
                    "Having no favors to bestow.  Destitute of fortune. Addicted to utterance of truth and common sense."),
            new Entry(
                    "FRIENDSHIP",
                    "n.",
                    "A ship big enough to carry two in fair weather, but only one in foul.",
                    new String[] {
                            "The sea was calm and the sky was blue;",
                            "Merrily, merrily sailed we two.",
                            "(High barometer maketh glad.)",
                            "On the tipsy ship, with a dreadful shout,",
                            "The tempest descended and we fell out.",
                            "(O the walking is nasty bad!)"},
                    "Armit Huff Bettle"),
            new Entry(
                    "FUTURE",
                    "n.",
                    "That period of time in which our affairs prosper, our friends are true and our happiness is assured.")
    };
}