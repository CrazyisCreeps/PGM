package tc.oc.pgm.api.map;

import org.jdom2.Document;
import tc.oc.pgm.api.map.factory.MapFactory;
import tc.oc.pgm.api.map.factory.MapModuleFactory;
import tc.oc.pgm.api.match.Match;
import tc.oc.pgm.api.match.MatchModule;
import tc.oc.pgm.api.match.factory.MatchModuleFactory;
import tc.oc.pgm.api.module.Module;
import tc.oc.pgm.api.module.exception.ModuleLoadException;
import tc.oc.xml.InvalidXMLException;

import javax.annotation.Nullable;
import java.util.logging.Logger;

/**
 * A {@link MatchModuleFactory} that was initialized from a {@link MapModuleFactory}.
 *
 * <p>No references to {@link org.bukkit.entity.Player} or {@link org.bukkit.World} objects should
 * be held in a {@link MapModule}. That is the responsibility of a {@link MatchModule}.
 *
 * @param <T> The specific type of {@link MatchModule}.
 */
public interface MapModule<T extends MatchModule> extends Module, MatchModuleFactory<T> {

  /** @see MatchModuleFactory#createMatchModule(Match) */
  @Nullable
  T createMatchModule(Match match) throws ModuleLoadException;

  /**
   * Callback when all {@link MapModule}s in the {@link MapContext} were successfully loaded.
   *
   * @param factory A map context, can be used to get other {@link MapModule}s.
   * @param logger A logger, also viewable from in-game.
   * @param doc A document.
   * @throws InvalidXMLException If a post-parse error occurs.
   */
  default void postParse(MapFactory factory, Logger logger, Document doc)
      throws InvalidXMLException {}
}
