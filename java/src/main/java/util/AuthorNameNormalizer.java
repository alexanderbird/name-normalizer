package util;

import java.util.Arrays;
import java.util.stream.Collectors;

public class AuthorNameNormalizer {
    public String normalize(String name) {
        String[] parts = parts(name);
        if (isMononym(parts))
            return name;
        return lastName(parts) + ", " +
               firstName(parts) +
               middleInitials(parts);
    }

    private String middleInitials(String[] parts) {
        if (hasNoMiddleName(parts))
            return "";

        return " " + Arrays.stream(parts)
                .skip(1)
                .limit(parts.length - 2)
                .map(this::initial)
                .collect(Collectors.joining(" "));
    }

    private boolean hasNoMiddleName(String[] parts) {
        return parts.length <= 2;
    }

    private String initial(String name) {
        if (name.length() == 1)
            return name;
        return name.charAt(0) + ".";
    }

    private String[] parts(String name) {
        return name.trim().split(" ");
    }

    private String firstName(String[] parts) {
        return parts[0];
    }

    private String lastName(String[] parts) {
        return parts[parts.length - 1];
    }

    private boolean isMononym(String[] parts) {
        return parts.length == 1;
    }
}

